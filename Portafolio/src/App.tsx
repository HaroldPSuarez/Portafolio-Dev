import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Welcome from "./components/Loader/Loader";
import LinesUp from "./components/Background/Lines/LinesUp";
import LinesDown from "./components/Background/Lines/LinesDown";
import "./App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("welcome-seen");
    if (seen) {
      setShowWelcome(false);
    }
  }, []);

  const finishWelcome = () => {
    sessionStorage.setItem("welcome-seen", "true");
    setShowWelcome(false);
  };

  return showWelcome ? (
    <Welcome onFinish={finishWelcome} />
  ) : (
    <>
      <LinesUp />
      <LinesDown />
      <div className="Estructura">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
