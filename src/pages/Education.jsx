import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      institution: "High School Name",
      degree: "High School Diploma",
      year: "2010 - 2014",
    },
    {
      institution: "College Name",
      degree: "Associate Degree",
      year: "2014 - 2016",
    },
    {
      institution: "University Name",
      degree: "Bachelor’s Degree",
      year: "2016 - 2020",
    },
  ];

  return (
    <section className="space-y-6 p-6">
      <div className="flex items-center mb-12">
        <h2 className="text-5xl font-bold text-white mr-8">Education</h2>
        <div className="flex-grow border-t-2 border-white"></div>
      </div>
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          className="border-l-2 border-white pl-4 ml-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="text-xl font-bold text-white">{item.institution}</div>
          <div className="text-lg text-white">{item.degree}</div>
          <div className="text-sm text-gray-400">{item.year}</div>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
