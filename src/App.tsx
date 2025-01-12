import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookPage } from "./components/bookPage/BookPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./components/notfound/NotFound";
import { Busket } from "./components/busket/Busket";
import { Favourite } from "./components/favourite/Favourite";
import { Payment } from "./components/payment/Payment";
import "./styles/reset.scss";
import { SignUp } from "./components/registration/signup/SignUp";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/:isbn13" element={<BookPage />} />
        <Route path="/basket" element={<Busket />} />
        <Route path="/favorites" element={<Favourite />} />
        <Route path="/profile" element={<LoginPage />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
