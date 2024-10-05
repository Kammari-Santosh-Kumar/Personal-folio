import React from 'react';

const Resume = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1LXs9998TywjpqslRnBFGEfzi9PPSo0QO/view?usp=sharing';
    link.download = 'YourName_Resume.pdf';
    link.click();
  };




  return (
    <section className="space-y-6 p-6">
    <div>
      <div className="flex items-center mb-12">
        <h2 className="text-6xl font-bold text-white mr-8">Resume</h2>
        <div className="flex-grow border-t-4 border-white"></div>
      </div>
        <p className="text-lg mb-6 text-white">
          Find my Resume here
        </p>

        <button 
          className="bg-white text-black py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
      </section>
  );
};

export default Resume;
