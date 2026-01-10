import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/Home/Home";
import Welcome from "./components/Loader/Loader";
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
    <div className="Estructura">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
