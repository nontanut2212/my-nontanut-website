import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = "Welcome To My Website";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onComplete();
          }, 300);
        }, 300);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-900 text-gray-100 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="mb-4 text-2xl md:text-4xl font-mono font-bold">
        {text}
        <span className="ml-1 animate-blink"> | </span>
      </div>
      <div className="w-[320px] md:w-[600px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%]  h-full bg-gradient-to-r from-blue-500 to-cyan-300 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
