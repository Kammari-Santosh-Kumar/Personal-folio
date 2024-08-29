
import { motion } from 'framer-motion';
import AnimatedHeader from '../components/AnimatedHeader'; // Adjust path as needed

const About = () => {
  return (
    <div className="p-6">
      <AnimatedHeader />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-base leading-relaxed">
          Im a web and app developer passionate about creating elegant solutions to complex problems.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
