import { useEffect, useState } from "react";
import SplitText from "../../Animations/SplitText/SplitText";
import "./Loader.css";

const Welcome = ({ onFinish }: { onFinish: () => void }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true); // activa animación de salida
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome">
      <SplitText
        text="Welcome"
        className="welcome-text"
        leaving={leaving}
        onComplete={onFinish} // cuando termina la salida → cambia de página
      />
    </div>
  );
};

export default Welcome;
