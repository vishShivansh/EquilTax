import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Header2 } from "./components/Header2.jsx";

import { Footer } from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import { Home } from "./pages/Home.jsx";
import NewsFeed from "./pages/NewsFeed.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="2sm:flex 2sm:flex-row 2sm:items-center 2sm:justify-between 2sm:bg-[#f4f6fc]">
        <Header />
        <Header2 />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About.jsx" element={<About />} />
        <Route path="/NewsFeed.jsx" element={<NewsFeed />} />
        <Route path="/Career.jsx" element={<Career />} />
        <Route path="/ContactUs.jsx" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
