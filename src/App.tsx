import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookPage } from "./components/bookPage/BookPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./components/notfound/NotFound";

import "./styles/reset.scss";
import { Busket } from "./components/busket/Busket";
import { Favourite } from "./components/favourite/Favourite";
import { Payment } from "./components/payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/:isbn13" element={<BookPage />} />
        <Route path="/basket" element={<Busket />} />
        <Route path="/favorites" element={<Favourite />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
