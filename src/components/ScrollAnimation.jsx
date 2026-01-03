// src/components/ScrollAnimation.jsx

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const ScrollAnimation = ({
  children,
  delay = 0,
  direction = "up", // up | down | left | right
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // ✅ Mobile OR reduced motion → NO animation
  if (isMobile || reduceMotion) {
    return <>{children}</>;
  }

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      case "down":
        return { opacity: 0, y: -40 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
