import "./Lines.css";

function LinesDown() {
  const lines = [
    { left: "11%", height: 90, duration: 7, delay: 0.3 },
    { left: "24%", height: 110, duration: 6, delay: 1.8 },
    { left: "37%", height: 75, duration: 9, delay: 0.7 },
    { left: "50%", height: 95, duration: 5.5, delay: 2.5 },
    { left: "63%", height: 80, duration: 8, delay: 1.1 },
    { left: "76%", height: 65, duration: 7.5, delay: 0.4 },
    { left: "90%", height: 105, duration: 6.5, delay: 1.9 },
  ];

  return (
    <div className="lines-container">
      {lines.map((l, i) => (
        <div
          key={i}
          className="line-down"
          style={{
            left: l.left,
            height: `${l.height}px`,
            animationDuration: `${l.duration}s`,
            animationDelay: `${l.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default LinesDown;
