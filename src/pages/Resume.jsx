// import React from 'react';

// const Resume = () => {
//   // Function to handle resume download
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = 'https://drive.google.com/file/d/1LXs9998TywjpqslRnBFGEfzi9PPSo0QO/view?usp=sharing';
//     link.download = 'YourName_Resume.pdf';
//     link.click();
//   };




//   return (
//     <section className="space-y-6 p-6">
//     <div>
//       <div className="flex items-center mb-12">
//         <h2 className="text-6xl font-bold text-white mr-8">Resume</h2>
//         <div className="flex-grow border-t-4 border-white"></div>
//       </div>
//         <p className="text-lg mb-6 text-white">
//           Find my Resume here
//         </p>

//         <button 
//           className="bg-white text-black py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
//           onClick={handleDownload}
//         >
//           Download Resume
//         </button>
//       </div>
//       </section>
//   );
// };

// export default Resume;
// import React from 'react';

// const Resume = () => {
//   // Function to handle resume download
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href =
//       'https://drive.google.com/uc?export=download&id=1LXs9998TywjpqslRnBFGEfzi9PPSo0QO'; // Direct download link
//     link.download = 'SantoshKammari_Resume.pdf'; // File name when downloaded
//     link.click();
//   };

//   return (
//     <section className="px-4 sm:px-6 lg:px-12 py-8">
//       {/* Heading with Divider */}
//       <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-12 text-center sm:text-left">
//         <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-0 sm:mr-8">
//           Resume
//         </h2>
//         <div className="w-full sm:flex-grow border-t-2 sm:border-t-4 border-white"></div>
//       </div>

//     <p className="text-base sm:text-lg mb-6 text-white whitespace-nowrap text-center sm:text-left">
//   My Resume
// </p>



//       {/* Download Button */}
//       <button
//         className="bg-white text-black py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-lg rounded-lg 
//                    hover:bg-green-600 hover:text-white transition duration-300"
//         onClick={handleDownload}
//       >
//         Download Resume
//       </button>
//     </section>
//   );
// };

// export default Resume;
import React from 'react';

const Resume = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/file/d/1KwRbP7AgHNvtxbRL_lXTMpL33l2xRdKx/view?usp=sharing';
    link.download = 'SantoshKammari_Resume.pdf';
    link.click();
  };

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 ">
      {/* Heading with Divider */}
      <div className="flex items-center justify-center sm:justify-center mb-6 sm:mb-12">
        <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold text-white mr-4">
          Resume
        </h2>
        <div className="flex-grow border-t-22 sm:border-t-4 border-white"></div>
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col items-center sm:items-start space-y-4">
        <p className="text-base sm:text-lg text-white">My Resume</p>

        {/* Download Button */}
        <button
          className="bg-white text-black py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-lg rounded-lg 
                     hover:bg-green-600 hover:text-white transition duration-300"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;
