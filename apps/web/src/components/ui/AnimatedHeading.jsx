"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function AnimatedHeading({
  text,
  className = "",
  hero = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: hero ? 0 : 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hero]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          initial={{
            opacity: 0,
            filter: "blur(16px)",
            y: 18,
          }}
          animate={
            visible
              ? {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: index * 0.04,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
