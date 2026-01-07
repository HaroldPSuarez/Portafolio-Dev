import { useEffect } from "react";
import SplitText from "../SplitText/SplitText"; // ajusta la ruta si cambia
import "./Loader.css";

const Welcome = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="welcome">
      <SplitText text="Welcome" className="welcome-text" />
    </div>
  );
};

export default Welcome;
