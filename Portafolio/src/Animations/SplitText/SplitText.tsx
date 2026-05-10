import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./SplitText.css";

interface SplitTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  leaving?: boolean;
  onComplete?: () => void;
}

const SplitText = ({
  text,
  className,
  duration = 0.6,
  delay = 0,
  leaving = false,
  onComplete,
}: SplitTextProps) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    if (!leaving) {
      // 🔵 ENTRADA
      gsap.fromTo(
        letters,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: 0.05,
          ease: "power3.out",
        }
      );
    } else {
      // 🔴 SALIDA
      gsap.to(letters, {
        opacity: 0,
        y: -40,
        duration: 0.5,
        stagger: 0.04,
        ease: "power3.in",
        onComplete,
      });
    }
  }, [leaving, duration, delay, onComplete]);

  return (
    <h1 ref={textRef} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="split-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default SplitText;
