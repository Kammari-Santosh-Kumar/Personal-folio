
import { useState, useEffect } from 'react';
import ppic from "../assets/MyPIC.jpg";

const AnimatedHeader = () => {
  const text = "Kammari Santosh Kumar";
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing Effect
  useEffect(() => {
    const typeText = () => {
      setDisplayedText((prev) => {
        if (prev.length < text.length) {
          return text.slice(0, prev.length + 1);
        }
        return prev;
      });
    };

    const intervalId = setInterval(typeText, 300);
    return () => clearInterval(intervalId);
  }, []);

  // Cursor Blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative flex flex-col items-center mt-10 mb-20 md:block">
      {/* Profile Image */}
      <div className="mb-4 md:absolute md:top-0 md:right-8 md:-mt-11">
      <img
  src={ppic}
  alt="Profile"
  className="w-36 h-36 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full border-4 border-white object-cover mx-auto"
/>

      </div>

      {/* Animated Text */}
      <div className="border-4 border-white p-4 inline-block mt-4 md:mt-14 md:mb-20">
        <div className="text-3xl sm:text-4xl md:text-7xl font-bold text-white font-mono text-center">
          {displayedText}
          {cursorVisible && <span className="ml-1">|</span>}
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
