import Hero from "./Hero";
import FAQ from "./FAQ";

const Home = () => {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      imgSrc: "https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      imgSrc: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    },
    {
      title: "Think Like a Monk",
      author: "Jay Shetty",
      imgSrc: "https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      imgSrc: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      title: "The 5 AM Club",
      author: "Robin Sharma",
      imgSrc: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    },
    {
      title: "Ikigai",
      author: "Héctor García",
      imgSrc: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      imgSrc: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      imgSrc: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    },
    {
      title: "Man's Search for Meaning",
      author: "Viktor E. Frankl",
      imgSrc: "https://m.media-amazon.com/images/I/61157LApbuL.jpg",
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      imgSrc: "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Books Section */}
      <div className="py-10 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-slate-200">
              The{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Books
              </span>
            </h3>
            <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
              Discover our curated collection of books that will captivate your
              imagination and expand your knowledge.
            </p>
          </div>

          {/* Book List */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {books.map((book, index) => (
              <div key={index} className="flex flex-col items-center p-4">
                <img
                  src={book.imgSrc}
                  alt={book.title}
                  className="h-45 w-72 object-cover"
                />
                <div className="w-full mt-2 text-center sm:text-left">
                  <h4 className="text-base font-medium text-gray-800 dark:text-slate-200">
                    {book.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default Home;
