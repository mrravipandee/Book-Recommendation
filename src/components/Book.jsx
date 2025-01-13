import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [errorRecommendations, setErrorRecommendations] = useState(null);
  const [errorSummary, setErrorSummary] = useState(null);
  const [image, setImage] = useState(null);
  const [summary, setSummary] = useState("");

  const FALLBACK_IMAGE =
    "https://img.freepik.com/premium-vector/vector-modern-book-cover-design-company-annual-report_812472-619.jpg?w=360";

  // Fetch book image based on title
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          "https://book-recommendation-system-o928.onrender.com/api/get_book_image",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ book_title: title }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setImage(data.status === "success" ? data.image_url : FALLBACK_IMAGE);
      } catch (err) {
        console.error("Error fetching book image:", err.message);
        setImage(FALLBACK_IMAGE);
      }
    };

    fetchImage();
  }, [title]);

  // Fetch book recommendations based on title
  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoadingRecommendations(true);
      try {
        const response = await fetch(
          "https://book-recommendation-system-o928.onrender.com/api/recommend_books",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ book_title: title }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setRecommendations(data.recommendations || []);
      } catch (err) {
        console.error("Error fetching recommendations:", err.message);
        setErrorRecommendations(err.message);
      } finally {
        setLoadingRecommendations(false);
      }
    };

    fetchRecommendations();
  }, [title]);

  // Fetch book summary using the Gemini API
  useEffect(() => {
    const fetchBookSummary = async () => {
      setLoadingSummary(true);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) {
          throw new Error("API key is missing. Please set VITE_API_KEY in your environment variables.");
        }

        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
          {
            "contents": [
              {
                "parts": [
                  {
                    "text": `Generate a summary for the book titled "${title}" in 150 words.`,
                  }
                ]
              }
            ]
          },
          { headers: { "Content-Type": "application/json" } }
        );

        const generatedSummary =
          response.data?.candidates[0]?.content?.parts[0]?.text || "Summary is unavailable.";
        setSummary(generatedSummary);
      } catch (error) {
        console.error("Error fetching book summary:", error.response?.data || error.message);
        setErrorSummary("Unable to fetch the book summary at the moment.");
      } finally {
        setLoadingSummary(false);
      }
    };

    fetchBookSummary();
  }, [title]);

  // Handle recommendation click to navigate to the selected book page
  const handleRecommendationClick = (bookTitle) => {
    navigate(`/book/${bookTitle}`);
  };

  return (
    <div className="py-10 dark:bg-slate-900">
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Section: Book Image and Title */}
          <div className="col-span-1 flex flex-col items-center">
            <img
              src={image}
              alt={`Cover of ${title}`}
              className="w-60 h-80 object-cover shadow-lg"
            />
            <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-slate-200 text-center">
              {title}
            </h2>
          </div>

          {/* Right Section: Book Summary */}
          <div className="col-span-2 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-4">
              Book Summary
            </h3>
            {loadingSummary ? (
              <p className="text-center text-gray-600 dark:text-slate-400">
                Fetching book summary...
              </p>
            ) : errorSummary ? (
              <p className="text-red-600">{errorSummary}</p>
            ) : (
              <p className="text-gray-600 dark:text-slate-400 text-justify">
                {summary}
              </p>
            )}
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-4">
            Recommended Books
          </h3>
          {loadingRecommendations ? (
            <div className="flex justify-center">
              <div className="loader border-t-4 border-blue-700 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : errorRecommendations ? (
            <p className="text-red-600">Error: {errorRecommendations}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {recommendations.length > 0 ? (
                recommendations.map((recBook, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 cursor-pointer"
                    onClick={() => handleRecommendationClick(recBook.title)}
                  >
                    <img
                      src={recBook.image || FALLBACK_IMAGE}
                      alt={`Cover of ${recBook.title}`}
                      className="h-45 w-72 object-cover"
                    />
                    <h4 className="mt-2 text-base font-medium text-gray-800 dark:text-slate-200 text-center">
                      {recBook.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-slate-400 text-center">
                      {recBook.author || "No description available."}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 dark:text-slate-400">No recommendations available.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
