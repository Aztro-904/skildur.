"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function RevealText({
  text = "",
  children,
  className = "",
  as = "h2",
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
        threshold: 0.15,
        rootMargin: "-40px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 18,
        filter: "blur(8px)",
      }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 0.7,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Tag className={className}>
        {children ?? text}
      </Tag>
    </motion.div>
  );
}