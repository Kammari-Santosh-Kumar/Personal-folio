import GroupGPTLogo from '../assets/groupgpt.jpg'
import portfolioLogo from '../assets/portfolio.png'
import leaderboardLogo from '../assets/leaderboard.png'
import hfestLogo from '../assets/hfest23.png'
import goodolLogo from '../assets/good-ol.png'
import chessLogo from '../assets/chessy.jpg'
import gitHubLogo from '../assets/github.svg'
import gitIvertLogo from '../assets/gitinvert.png'
import simonsays from '../assets/simonsays.png'
import ckp from '../assets/chromakey.jpeg'
import cry from '../assets/crypto.jpeg'

const projects = [


  {
    title: "Simon Says",
    description: "Simon Says Game – A fun memory-based game built with JavaScript where players repeat increasingly complex sequences of colors and sounds. Designed with an interactive UI, and responsive gameplay logic to enhance user engagement and test memory skills.",
    imageUrl: simonsays,
    githubLink: "https://github.com/Kammari-Santosh-Kumar/Simon-Says",
  },
  {
    title: "Chroma Key Processor",
    description: "Chroma Key Processor – A JavaScript-based application that applies the chroma key (green screen) effect, allowing users to replace a specific background color in images or videos with custom visuals. Built with efficient pixel-level manipulation for real-time processing",
    imageUrl: ckp,
    githubLink: "https://github.com/Kammari-Santosh-Kumar/Chroma-Key-Processor",
  },
  {
    title: "Crypto Community Platform",
    description: "Crypto Community Platform – A web application designed to bring crypto enthusiasts together. It features discussion forums, real-time market updates, community-driven content, and secure authentication.",
    imageUrl: cry,
    githubLink: "https://token-disc.vercel.app/",
  },

];

const Projects = () => {
  return (
    <div>
      <div className="flex items-center mb-12">
        <h2 className="text-6xl font-bold text-white mr-8">Projects</h2>
        <div className="flex-grow border-t-4 border-white"></div>
      </div>
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white p-4 hover:bg-white hover:text-black transition-colors duration-300 group"  // Added group here
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-black"
              >
                {/* GitHub icon that changes on hover */}
                <img
                  src={gitHubLogo}
                  alt="GitHub Link"
                  className="w-6 h-6 mr-2 group-hover:hidden"  // Added group-hover:hidden to hide on hover
                />
                <img
                  src={gitIvertLogo}
                  alt="GitHub Link"
                  className="w-6 h-6 mr-2 hidden group-hover:inline"  // Added group-hover:inline to show on hover
                />
                <span className="text-sm">View on GitHub</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

