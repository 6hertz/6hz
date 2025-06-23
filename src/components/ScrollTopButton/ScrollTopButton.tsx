"use client";
import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 flex justify-center items-center p-3 rounded-md shadow-lg bg-gold text-white transition-all duration-300 ${
        visible
          ? "opacity-100 hover:bg-brown-700"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowCircleUp size={30} />
    </button>
  );
};

export default ScrollButton;
