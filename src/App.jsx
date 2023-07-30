import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ViewBeer from "./components/ViewBeer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-ubuntu text-[#314E52] max-h-fit">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/beer" element={<ViewBeer />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
