// import { useState, useEffect } from 'react';
// import ppic from "../assets/PROFILEPIC.jpg"
// const AnimatedHeader = () => {
//   const text = "Kammari Santosh Kumar";
//   const [displayedText, setDisplayedText] = useState('');
//   const [cursorVisible, setCursorVisible] = useState(true);

//   useEffect(() => {
//     const typeText = () => {
//       setDisplayedText((prev) => {
//         if (prev.length < text.length) {
//           return text.slice(0, prev.length + 1);
//         }
//         return prev;
//       });
//     };

//     const intervalId = setInterval(typeText, 300);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setCursorVisible((prev) => !prev);
//     }, 500);

//     return () => clearInterval(cursorInterval);
//   }, []);

//   return (
//     <div className="relative">
//       <div className="border-4 border-white p-4 inline-block">
//         <div className="text-6xl font-bold text-white font-mono relative">
//           {displayedText}
//           {cursorVisible && <span className="ml-1">|</span>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedHeader;

import { useState, useEffect } from 'react';
import ppic from "../assets/PROFILEPIC.jpg";

const AnimatedHeader = () => {
  const text = "Kammari Santosh Kumar";
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

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

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative">
      {/* Animated Text */}
      <div className="border-4 border-white p-4 inline-block mt-14 mb-20">
        <div className="text-7xl font-bold text-white font-mono relative">
          {displayedText}
          {cursorVisible && <span className="ml-1">|</span>}
        </div>
      </div>

      <div className="absolute top-0 right-8 -mt-11">
  <img 
    src={ppic} 
    alt="Profile" 
    className="w-80 h-80 rounded-full border-4 border-white"
  />
</div>

    </div>
  );
};

export default AnimatedHeader;
