import  { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ws1, ws2, ws3, ws4, ws5, ws6 } from "../constants";
import { ArrowUpRight } from 'lucide-react';

const CustomCursor = () => {
  const images = [ws1, ws2, ws3, ws4, ws5, ws6];

  const dotRef = useRef(null);
  const imgRef = useRef(null);
  const intervalRef = useRef(null);

  const [imgIndex, setImgIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useLayoutEffect(() => {
    const dot = dotRef.current;
    const img = imgRef.current;

    // mouse follow
    const move = (e) => {
      gsap.to(dot, {
        x: e.clientX + 8,
        y: e.clientY - 8,

      });

      gsap.to(img, {
        x: e.clientX + 20,
        y: e.clientY - 20,

      });
    };

    window.addEventListener("mousemove", move);

    // hover images
    const handleEnterImages = () => {
      setShowImages(true);
      setShowButton(false);

      gsap.to(dot, { opacity: 0, scale: 0.3, duration: 0.2 });
      gsap.to(img, { opacity: 1, scale: 1, duration: 0 });

      intervalRef.current = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % images.length);
      }, 600);
    };

    // hover button
    const handleEnterButton = () => {
      setShowButton(true);
      setShowImages(false);

      gsap.to(dot, { opacity: 1, scale: 1, duration: 0.2 });
      gsap.to(img, { opacity: 0, scale: 0.5, duration: 0.2 });

      clearInterval(intervalRef.current);
      setImgIndex(0);
    };

    // leave hover
    const handleLeave = () => {
      setShowButton(false);
      setShowImages(false);

      gsap.to(dot, { opacity: 1, scale: 1, duration: 0.2 });
      gsap.to(img, { opacity: 0, scale: 0.5, duration: 0.2 });

      clearInterval(intervalRef.current);
      setImgIndex(0);
    };

    window.addEventListener("cursor-hover-images", handleEnterImages);
    window.addEventListener("cursor-hover-button", handleEnterButton);
    window.addEventListener("cursor-hover-leave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor-hover-images", handleEnterImages);
      window.removeEventListener("cursor-hover-button", handleEnterButton);
      window.removeEventListener("cursor-hover-leave", handleLeave);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      {/* DOT CURSOR */}
      <div
        ref={dotRef}
        className="max-md:hidden fixed z-1000 flex w-2.5 h-2.5 justify-center items-center pointer-events-none"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-100"></span>

        <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-orange-500 justify-center items-center">
          {showButton && (
            <button className=" py-2 px-2 rounded-full bg-white text-orange-500 whitespace-nowrap font-semibold flex justify-center items-center text-center">
              <ArrowUpRight className="w-8 h-8" />
            </button>
          )}
        </span>
      </div>

      {/* IMAGE CURSOR (ALWAYS MOUNTED) */}
      <img
        ref={imgRef}
        src={images[imgIndex]}
        alt="cursor"
        className="cursor-img fixed pointer-events-none z-999 rounded  "
      />
    </>
  );
};

export default CustomCursor;
