import { useState } from "react";
import "./Cv.css";

function Cv() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    const confirmado = window.confirm(
      "¿Deseas descargar mi hoja de vida en PDF?",
    );

    if (!confirmado) return;

    setLoading(true);

    const link = document.createElement("a");
    link.href = "/cv-harold-pinto.pdf";
    link.download = "CV-Harold-Pinto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="Cv">
      <button className="cv-btn" onClick={handleDownload} disabled={loading}>
        {loading ? "Descargando..." : "Download CV"}
      </button>
    </div>
  );
}

export default Cv;
