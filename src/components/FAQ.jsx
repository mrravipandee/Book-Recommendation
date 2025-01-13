const FAQ = () => {
  const faqs = [
    {
      question: "How do I find book reviews on this platform?",
      answer:
        "You can explore book reviews by navigating to the 'Reviews' section, where you'll find detailed reviews written by experts and readers.",
    },
    {
      question: "Can I get personalized book recommendations?",
      answer:
        "Yes, sign up for an account and fill out your reading preferences. Our system will recommend books tailored to your interests.",
    },
    {
      question: "How can I contribute my own reviews?",
      answer:
        "Once you create an account, you can submit reviews for books you've read. Simply go to the book's page and click 'Add Review'.",
    },
    {
      question: "Are there any charges for using this platform?",
      answer:
        "Our basic services like browsing books and reading reviews are free. However, premium features like personalized recommendations require a subscription.",
    },
    {
      question: "What genres are available on this platform?",
      answer:
        "We cover a wide range of genres, including fiction, non-fiction, self-help, fantasy, science fiction, romance, and many more.",
    },
  ];

  return (
    <div className="py-10 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200">
            Frequently Asked Questions
          </h3>
          <p className="mt-3 text-base text-gray-600 dark:text-slate-400">
            Have questions? Check out the most common queries about our book
            platform and services.
          </p>
        </div>

        <ul className="space-y-0.5">
          {faqs.map((faq, index) => (
            <li key={index} className="border-t border-base-content/10">
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base text-left "
                aria-expanded="false"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling;
                  if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                  }
                }}
              >
                <span className="flex-1 text-gray-800 dark:text-slate-200">
                  {faq.question}
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current dark:text-slate-200"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center transition duration-200 ease-out"
                  />
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center rotate-90 transition duration-200 ease-out"
                  />
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.4s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed text-gray-600 dark:text-slate-400">
                  {faq.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
