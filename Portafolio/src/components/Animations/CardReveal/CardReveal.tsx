import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardRevealProps {
  children: React.ReactNode;
  index?: number;
}

function CardReveal({ children, index = 0 }: CardRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 50 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top bottom-=60px",
      end: "top center",
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.12,
          ease: "power3.out",
        }),
      onLeaveBack: () =>
        gsap.to(el, {
          opacity: 0,
          y: 50,
          duration: 0.4,
          ease: "power2.in",
        }),
      onEnterBack: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }),
      onLeave: () =>
        gsap.to(el, {
          opacity: 0,
          y: -30,
          duration: 0.4,
          ease: "power2.in",
        }),
    });

    return () => {
      trigger.kill();
    };
  }, [index]);

  return <div ref={ref}>{children}</div>;
}

export default CardReveal;
