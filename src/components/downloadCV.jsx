import React from 'react';
import { Link } from 'react-router-dom';

const DownloadCV = () => {
    const downloadCV = () => {
        const resumeLink = 'https://drive.google.com/uc?export=download&id=12PqmXGOZx6Fyes5uwwJPUkzeD8gsRq2O';
        const fileName = 'Kashish_Shukla_CV.pdf';
        const aTag = document.createElement('a');
        aTag.href = resumeLink;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    };

    const handleHireMeClick = () => {
        const contactUsSection = document.getElementById('contactUsSection');
        if (contactUsSection) {
            contactUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-4" onClick={downloadCV}>
                Download CV
            </button>

            <Link to="/ContactUs">
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-4" onClick={handleHireMeClick}>
                    Contact Us
                </button>
            </Link>
        </div>
    );
};

export default DownloadCV;
