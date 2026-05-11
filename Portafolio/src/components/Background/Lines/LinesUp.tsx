import "./Lines.css";

function LinesUp() {
  const lines = [
    { left: "5%", height: 100, duration: 6, delay: 0 },
    { left: "18%", height: 70, duration: 8, delay: 1 },
    { left: "31%", height: 120, duration: 5, delay: 0.5 },
    { left: "44%", height: 80, duration: 9, delay: 2 },
    { left: "57%", height: 110, duration: 7, delay: 1.5 },
    { left: "70%", height: 90, duration: 6.5, delay: 0.8 },
    { left: "83%", height: 60, duration: 8.5, delay: 1.2 },
  ];

  return (
    <div className="lines-container">
      {lines.map((l, i) => (
        <div
          key={i}
          className="line-up"
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

export default LinesUp;
