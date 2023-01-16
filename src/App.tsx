import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Books } from "./components/books/Books";
import { Header } from "./components/header/Header";

import "./styles/reset.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
