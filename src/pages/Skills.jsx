// import reactLogo from '../assets/reactjs.svg';
// import Clogo from '../assets/C.svg';
// import cssLogo from '../assets/css.svg';
// import djangoLogo from '../assets/django.svg';
// import gitLogo from '../assets/git.svg';
// import githubLogo from '../assets/github.svg';
// import htmlLogo from '../assets/html.svg';
// import javascriptLogo from '../assets/javascript.svg';
// import mongodbLogo from '../assets/mongodb.svg';
// import nextjsLogo from '../assets/nextjs.svg';
// import nodejsLogo from '../assets/nodejs.svg';
// import pythonLogo from '../assets/python.svg';
// import tailwindLogo from '../assets/tailwind.svg';
// import typescriptLogo from '../assets/typescript.svg';
// import goLogo from '../assets/gologo.png'
// import java from '../assets/java.svg'
// import sql from '../assets/SQL.png'
// import redux from '../assets/redux.svg'
// import express from '../assets/express.svg'

// const skills = [
//   { name: 'React', logo: reactLogo },
//   { name: 'Redux', logo: redux },
//   { name: 'Express js', logo: express },
//   { name: 'C', logo: Clogo },
//   { name: 'CSS', logo: cssLogo },
//   { name: 'SQL', logo: sql },
//   { name: 'Git', logo: gitLogo },
//   { name: 'Github', logo: githubLogo },
//   { name: 'HTML', logo: htmlLogo },
//   { name: 'Javascript', logo: javascriptLogo },
//   { name: 'MongoDB', logo: mongodbLogo },
//   { name: 'NextJs', logo: nextjsLogo },
//   { name: 'NodeJs', logo: nodejsLogo },
//   { name: 'Python', logo: pythonLogo },
//   { name: 'Typescript', logo: typescriptLogo },
//   { name: 'Tailwind', logo: tailwindLogo },
//   { name: 'Go', logo: goLogo },
//   { name: 'Java', logo: java }
// ];

// const Skills = () => {
//   return (
//     <div>
//       <div className="flex items-center mb-12">
//         <h2 className="text-5xl font-bold text-white mr-8">Skills</h2>
//         <div className="flex-grow border-t-2 border-white"></div>
//       </div>
//       <div className="skills-grid-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="skill-item relative flex flex-col items-center justify-center space-y-2 p-3 bg-gray-800 rounded-lg max-w-[120px] mx-auto overflow-hidden transition-transform transform hover:scale-110"
//           >
//             {/* Pulse effect */}
//             <div
//               className="absolute inset-0 z-0 before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:rounded-lg"
//               style={{
//                 animation: 'pulseTravel 1.5s linear infinite',
//               }}
//             ></div>
//             <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo h-14 w-12 z-10" />
//             <span className="text-white font-mono z-10">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;




import React from "react";
import { Box, Typography, keyframes } from "@mui/material";
import reactLogo from "../assets/reactjs.svg"; // Adjust your paths

// Add other imports as needed...
import Clogo from '../assets/C.svg';
import cssLogo from '../assets/css.svg';
import gitLogo from '../assets/git.svg';
import githubLogo from '../assets/github.svg';
import htmlLogo from '../assets/html.svg';
import javascriptLogo from '../assets/javascript.svg';
import mongodbLogo from '../assets/mongodb.svg';
import nextjsLogo from '../assets/nextjs.svg';
import nodejsLogo from '../assets/nodejs.svg';
import pythonLogo from '../assets/python.svg';
import tailwindLogo from '../assets/tailwind.svg';
import typescriptLogo from '../assets/typescript.svg';
import goLogo from '../assets/gologo.png'
import java from '../assets/java.svg'
import sql from '../assets/SQL.png'
import redux from '../assets/redux.svg'
import express from '../assets/express.svg'

const pulseTravel = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const skills = [
  { name: 'React', logo: reactLogo },
  { name: 'Redux', logo: redux },
  { name: 'Expressjs', logo: express },
  { name: 'C', logo: Clogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'SQL', logo: sql },
  { name: 'Git', logo: gitLogo },
  { name: 'Github', logo: githubLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'Javascript', logo: javascriptLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'NextJs', logo: nextjsLogo },
  { name: 'NodeJs', logo: nodejsLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Typescript', logo: typescriptLogo },
  { name: 'Tailwind', logo: tailwindLogo },
  { name: 'Go', logo: goLogo },
  { name: 'Java', logo: java }
];

const Skills = () => {
  return (
    <Box sx={{ p: 4 }}>
      <h2 className="text-6xl sm:text-6xl font-bold text-white text-center sm:text-left">
  Skills
</h2>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              bgcolor: "gray.800",
              borderRadius: 2,
              
              width:"120px",
              height:"120px",
              mx: "auto",
              overflow: "hidden",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)", // Slight scaling
              },
              "&:hover::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "150%",
                height: "100%",
                background: "linear-gradient(to right, transparent, rgba(72, 67, 67, 0.5), transparent)",
                borderRadius: 2,
                animation: `${pulseTravel} 1s linear infinite`,
              },
            }}
          >
            <Box
              component="img"
              src={skill.logo}
              alt={`${skill.name} logo`}
              sx={{ height: 56, width: 48, zIndex: 1 }}
            />
            <Typography sx={{ color: "white", fontFamily: "monospace", zIndex: 1 }}>
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
