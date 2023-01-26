import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookPage } from "./components/bookPage/BookPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainPage } from "./pages/MainPage";

import "./styles/reset.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/:isbn13" element={<BookPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
