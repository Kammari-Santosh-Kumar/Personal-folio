import React from "react";
import GroupGPTLogo from '../assets/groupgpt.jpg'
import portfolioLogo from '../assets/portfolio.png'
import leaderboardLogo from '../assets/leaderboard.png'
import hfestLogo from '../assets/hfest23.png'
import goodolLogo from '../assets/good-ol.png'
import chessLogo from '../assets/chessy.jpg'
import gitHubLogo from '../assets/github.svg'
import gitIvertLogo from '../assets/gitinvert.png'

const projects = [
  {
    title: "GroupGPT",
    description: "An AI chat-app where you can collaborate with your team with a GPT included.",
    imageUrl: GroupGPTLogo,
    githubLink: "https://github.com/saiteja1290/grpgpt",
  },
  {
    title: "THIS WEBSITE",
    description: "The portfolio website which is made for monospace and minimalistic designing concept.",
    imageUrl: portfolioLogo,
    githubLink: "https://github.com/NithinKonda/portfolio",
  },
  {
    title: "CP Leaderboard",
    description: "Website for tracking coding progress and rankings across platforms like LeetCode. Join the community, compete, and climb the ranks in competitive coding.",
    imageUrl: leaderboardLogo,
    githubLink: "https://github.com/cbitosc/LeaderBoard",
  },
  {
    title: "COSC Hacktoberfest 2023",
    description: "The central hub for CBIT Hacktoberfest Hackathon 2023, offering dynamic responsiveness, captivating animations, and seamless event registration.",
    imageUrl: hfestLogo,
    githubLink: "https://github.com/cbitosc/cbit-hacktoberfest23",
  },
  {
    title: "Good-Ol",
    description: "A basic arrow game that is compatible with any desktop can be played in any browser.",
    imageUrl: goodolLogo,
    githubLink: "https://github.com/NithinKonda/good-ol/",
  },
  {
    title: "Chesscom",
    description: "A chess.com clone which is implemented with Websockets for real-time gameplay.",
    imageUrl: chessLogo,
    githubLink: "https://github.com/NithinKonda/chesscom",
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
            className="border border-white p-4 hover:bg-white hover:text-black transition-colors duration-300"
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
                className="w-6 h-6 mr-2 hover:hidden"
              />
              <img
                src={gitIvertLogo}
                alt="GitHub Link"
                className="w-6 h-6 hidden hover:inline"
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
