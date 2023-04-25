import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.documentElement.scrollTop = 0;
    }
  };

  return (
    <div
      id="back-to-top"
      className={`${
        isHidden ? "opacity-0 bottom-[-40px] pointer-events-none" : "opacity-100 bottom-5"
      } bg-gray-300 rounded-full shadow-md text-red-600 cursor-pointer fixed right-5 transition-all duration-300 z-10`}
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" className="block h-6 m-3 fill-current">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
      </svg>
    </div>
  );
}
