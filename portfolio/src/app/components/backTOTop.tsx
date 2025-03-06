"use client";

import { useEffect, useState } from "react";

function BackToTop() {
  const [showButoon, setShowButton] = useState(false);

  const checkScrollPoistion = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPoistion);
    return () => {
      window.removeEventListener("scroll", checkScrollPoistion);
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
      >
        ↑
      </button>
    </div>
  );
}

export default BackToTop;
