import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://book-recommendation-system-o928.onrender.com/api/top50_books"
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setBooks(data.top_books);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <div className="py-10 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center pt-24">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-slate-200">
              Top{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                50 Books
              </span>
            </h3>
            <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
              Discover our curated collection of books that will captivate your
              imagination and expand your knowledge.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center mt-6">
              <div className="loader border-t-4 border-blue-700 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : error ? (
            <p className="text-center text-red-600 mt-6">
              Oops! Something went wrong: {error}
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {books.map((book, index) => (
                <Link
                  key={index}
                  to={{
                    pathname: `/book/${encodeURIComponent(book.title)}`,
                    state: { image: book.image },
                  }}
                  className="flex flex-col items-center p-4"
                >
                  <img
                    src={book.image}
                    alt={`Cover of the book ${book.title}`}
                    className="h-45 w-72 object-cover"
                  />
                  <div className="w-full mt-2 text-center sm:text-left">
                    <h4 className="text-base font-medium text-gray-800 dark:text-slate-200">
                      {book.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      {book.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                      {Math.round(book.rating)}/10
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBooks;
