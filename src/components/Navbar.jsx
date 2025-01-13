import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div>
      <section className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 dark:bg-black/10 backdrop-blur-lg py-3 shadow  md:top-6 md:rounded-3xl rounded-2xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link className="flex items-center" to="/">
                <img
                  className="h-7 w-auto rounded-full"
                  src="https://www.imagella.com/cdn/shop/products/31905fedfae14d5e55647c98eca5ce1f.jpg?v=1692598382&width=300"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Menu Icon for Small Devices */}
            <div className="md:hidden flex items-center rounded-md">
              <button
                onClick={toggleMenu}
                className="text-gray-900  focus:outline-none"
              >
                {menuOpen ? (
                  <FiX size={24} className="dark:bg-slate-100" />
                ) : (
                  <FiMenu size={24} className="dark:bg-slate-100" />
                )}
              </button>
            </div>

            {/* Links for larger devices */}
            <div className="hidden md:flex md:items-center md:gap-5">
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 dark:text-gray-100 hover:text-gray-500 hover:border-b"
                to="/"
              >
                Home
              </Link>
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 dark:text-gray-100 hover:text-gray-500 hover:border-b"
                to="/topbooks"
              >
                Top Books
              </Link>
              <button
                onClick={togglePopup}
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 dark:text-gray-100 hover:text-gray-500 hover:border-b"
              >
                Contact
              </button>
            </div>

            {/* Sign in button */}
            <div className="hidden md:flex items-center">
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50"
                to="/login"
              >
                <FcGoogle />
              </Link>
            </div>
          </div>
        </div>

        {/* Dropdown Menu for Small Devices */}
        {menuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-lg shadow-md text-center">
            <div className="flex flex-col items-start px-2 py-2">
              <Link
                className="block w-full rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                className="block w-full rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100"
                to="/topbooks"
                onClick={toggleMenu}
              >
                Top Books
              </Link>
              <button
                onClick={togglePopup}
                className="block w-full rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100"
              >
                Contact
              </button>
              <Link
                className="block w-full rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100"
                to="/login"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Popup Modal */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 max-w-md md:max-w-[48rem] w-full">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-100 dark:text-slate-200"
            >
              <FiX size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-200">
              About Me
            </h2>
            <p className="mt-4 text-gray-700 dark:text-slate-400 text-[12px]">
              I am a 3rd-year student passionate about machine learning, and I
              am working on building my first ML-integrated app. I enjoy solving
              complex problems and am actively contributing to open-source
              projects. You can check out my GitHub for some of my work. If you
              love my projects or want to support my journey, feel free to
              donate using the options below!
            </p>

            {/* Grid Layout for larger screens */}
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              <div className="flex justify-center">
                {/* Profile Image */}
                <img
                  className="w-44 h-44 rounded-full"
                  src="https://avatars.githubusercontent.com/u/74792529?v=4"
                  alt="Your Photo"
                />
              </div>

              <div className="flex justify-center">
                {/* QR Code for Donations */}
                <img
                  src="https://raw.githubusercontent.com/mrravipandee/Book-Recommendation/13acdfe3040c8ea2ae9a51e8ada8586d76f08ed7/src/assets/my-qr-code-paytm.svg"
                  alt="QR Code"
                  className="w-44 h-44 rounded-md "
                />
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-6">
              {/* Social Media Links with Icons */}
              <a
                href="https://github.com/mrravipandee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-yellow-500"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://x.com/mrravipandee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-yellow-500"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/in/mrravipandee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-yellow-500"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Scan to donate or click to open your UPI app.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
