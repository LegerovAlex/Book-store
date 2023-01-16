import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { MainPage } from "./pages/MainPage";

import "./styles/reset.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
