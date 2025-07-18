/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import AnimatedHeader from "../components/AnimatedHeader"; // Adjust path as needed

const About = () => {
  return (
    <div className="p-6">
      <AnimatedHeader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-8" // Add margin-top for spacing
      >
        <div className="flex items-center mb-12">
          <h2 className="text-5xl font-bold text-white mr-8">About Me</h2>
          <div className="flex-grow border-t-2 border-white"></div>
        </div>
        <p className="text-lg leading-relaxed font-press-start">
          I take pride in turning complex ideas into intuitive, user-friendly solutions. With expertise in Java, the MERN stack, Next.js, and Tailwind CSS, I focus on building clean, responsive, and efficient web applications. My keen interest in Cloud Computing, Linux, and DevOps inspires me to explore innovative ways to enhance processes and deliver value.

          During my tenure as Vice President of the Student Developers Community (SDC) and Lead Event Coordinator for the Cloud Community Club (C³), I had the privilege of leading initiatives that encouraged collaboration and growth. I am deeply committed to open-source development and enjoy contributing to projects that make a meaningful impact.

          I would be delighted to collaborate and bring your ideas to life!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
