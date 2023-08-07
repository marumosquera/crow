
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./views/ErrorPage";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { Tutorial } from "./views/Tutorial";
import { About } from "./views/About";
import { Escrow } from "./views/Escrow";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/about" element={<About />} />
          <Route path="/escrow" element={<Escrow />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
