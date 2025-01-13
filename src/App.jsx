import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopBooks from "./components/TopBooks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Book from "./components/Book";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topbooks" element={<TopBooks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:title" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
