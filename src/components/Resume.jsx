import React from 'react';
import Header from './Header';
import { ExternalLink } from 'lucide-react';

const Resume = ({ darkMode, setDarkMode, isContactOrResumePage }) => {
  const resumeUrl = "https://drive.google.com/file/d/1kheLrS0ZV5c4GF3HAA_ybbOx6JVDjY7w/preview";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1kheLrS0ZV5c4GF3HAA_ybbOx6JVDjY7w";

  return (
    <div className="container mx-auto mt-20 p-4">

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isContactOrResumePage={isContactOrResumePage}
      />

      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <iframe
        src={resumeUrl}
        width="100%"
        height="600px"
        title="Resume"
        className="mb-4"
      ></iframe>
      <a
        href={downloadUrl}
        download="Shreyas_Nandanwar_Resume.pdf"
        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-playfair flex items-center"
      >
        Download Resume <ExternalLink className="ml-1" size={16} />
      </a>
    </div>
  );
};

export default Resume;