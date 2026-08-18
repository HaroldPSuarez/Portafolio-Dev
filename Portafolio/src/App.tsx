import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Welcome from "./components/Loader/Loader";
import LinesUp from "./components/Background/Lines/LinesUp";
import LinesDown from "./components/Background/Lines/LinesDown";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(
    () => !sessionStorage.getItem("welcome-seen")
  );

  const finishWelcome = () => {
    sessionStorage.setItem("welcome-seen", "true");
    setShowWelcome(false);
  };

  return showWelcome ? (
    <Welcome onFinish={finishWelcome} />
  ) : (
     //estructura principal {#125,15}
    <>
      <LinesUp />
      <LinesDown />
      <div className="Estructura">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Home />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;