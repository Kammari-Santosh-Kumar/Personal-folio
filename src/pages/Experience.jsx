// import { motion } from "framer-motion";

// const Experience = () => {
//   const educationData = [
//     {
//       institution: "Full Stack Developer-Intern",
//       degree: "Coursevita",
//       year: "10/2024 - Present",
//     },
//     {
//       institution: "Vice President",
//       degree: "Student Developers Community",
//       year: "03/2024 - Present",
//     },
//     {
//       institution: "Full Stack Developer",
//       degree: "Rathri Constructions",
//       year: "01/2024 - 04/2024",
//     },
//     {
//         institution: "Frontend Developer",
//         degree: "Bharat Intern",
//         year: "08/2023 - 09/2023",
//       }

//   ];

//   return (
//     <section className="space-y-6 p-6">
//       <div className="flex items-center mb-12">
//         <h2 className="text-5xl font-bold text-white mr-8">Experience</h2>
//         <div className="flex-grow border-t-2 border-white"></div>
//       </div>
//       {educationData.map((item, index) => (
//         <motion.div
//           key={index}
//           className="border-l-2 border-white pl-4 ml-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.2 }}
//         >
//           <div className="text-xl font-bold text-white">{item.institution}</div>
//           <div className="text-lg text-white">{item.degree}</div>
//           <div className="text-sm text-gray-400">{item.year}</div>
//         </motion.div>
//       ))}
//     </section>
//   );
// };

// export default Experience;
// import { motion } from "framer-motion";
// import {  FaTerminal } from "react-icons/fa";

// const Experience = () => {
//   const educationData = [
//     {
//       institution: "Full Stack Developer-Intern",
//       degree: "Coursevita",
//       year: "10/2024 - Present",
//     },
//     {
//       institution: "Vice President",
//       degree: "Student Developers Community",
//       year: "03/2024 - Present",
//     },
//     {
//       institution: "Full Stack Developer",
//       degree: "Rathri Constructions",
//       year: "01/2024 - 04/2024",
//     },
//     {
//       institution: "Frontend Developer",
//       degree: "Bharat Intern",
//       year: "08/2023 - 09/2023",
//     },
//   ];

//   return (
//     <section className="space-y-8 p-6 bg-black rounded-lg shadow-lg">
//       <div className="flex items-center mb-8">
//         <h2 className="text-4xl font-extrabold text-white">Experience</h2>
//         <div className="flex-grow border-t-2 border-gray-500 ml-6"></div>
//       </div>
//       {educationData.map((item, index) => (
//         <motion.div
//           key={index}
//           className="flex items-start gap-4 p-4 border-l-4 border-white-500 bg-gray-950 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.2 }}
//         >
//           <FaTerminal className="text-white-500 text-2xl mt-1" />
//           <div>
//             <div className="text-2xl font-semibold text-white">{item.institution}</div>
//             <div className="text-lg text-gray-300">{item.degree}</div>
//             <div className="text-sm text-gray-400 italic">{item.year}</div>
//           </div>
//         </motion.div>
//       ))}
//     </section>
//   );
// };

// export default Experience;
import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

const Experience = () => {
  const educationData = [
    {
      institution: "Full Stack Developer-Intern",
      degree: "Coursevita",
      year: "10/2024 - Present",
    },
    {
      institution: "Vice President",
      degree: "Student Developers Community",
      year: "03/2024 - Present",
    },
    {
      institution: "Full Stack Developer",
      degree: "Rathri Constructions",
      year: "01/2024 - 04/2024",
    },
    {
      institution: "Frontend Developer",
      degree: "Bharat Intern",
      year: "08/2023 - 09/2023",
    },
  ];

  return (
    <section className="space-y-8 p-6 bg-black rounded-lg shadow-lg">
      <div className="flex items-center mb-8">
        <h2 className="text-5xl sm:text-4x1 font-extrabold text-white">Experience</h2>
        <div className="flex-grow border-t-2 border-gray-500 ml-6"></div>
      </div>
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          className="group flex items-start gap-4 p-4 border-l-4 border-blue bg-gray-950 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Icon with hover effect */}
          <FaTerminal className="text-white group-hover:text-black text-2xl mt-1 transition-all duration-300" />
          
          <div className="flex flex-col">
            {/* Institution Name */}
            <div className="text-2xl font-semibold text-white group-hover:text-black">{item.institution}</div>
            
            {/* Degree Name */}
            <div className="text-lg text-gray-300 group-hover:text-black">{item.degree}</div>
            
            {/* Year */}
            <div className="text-sm text-gray-400 italic group-hover:text-black">{item.year}</div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
