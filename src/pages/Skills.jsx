
import reactLogo from '../assets/reactjs.svg';
import Clogo from '../assets/C.svg';
import cssLogo from '../assets/css.svg';
import djangoLogo from '../assets/django.svg';
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

const skills = [
  { name: 'React', logo: reactLogo },
  { name: 'C', logo: Clogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'Django', logo: djangoLogo },
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
];

const Skills = () => {
  return (
    <div>
            <div className="flex items-center mb-12">
        <h2 className="text-5xl font-bold text-white mr-8">Skills</h2>
        <div className="flex-grow border-t-2 border-white"></div>
      </div>
        <div className="skills-grid-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-1">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-item flex flex-col items-center justify-center space-y-2 p-4 bg-gray-800 rounded-lg"
        >
          <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo h-14 w-12" />
          {/* Uncomment to show the skill name */}
          <span className="text-white font-mono">{skill.name}</span>
        </div>
      ))}
    </div>
    </div>
  
  );
};

export default Skills;
