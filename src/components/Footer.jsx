import React from 'react'
import { FaTwitter, FaDribbble, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'
import {Link} from 'react-router-dom'

const Footer = ({ darkMode }) => {
    const iconClass = `text-2xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hiver:text-gray-900'}`;


    return (
        <footer className={`py-10 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
            <div className="bg-indigo-900 text-white py-8 px-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold font-roboto">Start a project</h3>
                        <p className='font-playfair'>Interested in working together? We should queue up a time to chat. I'll buy the coffee.</p>
                    </div>
                    <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-bold font-playfair py-2 px-4 rounded-full transition duration-300">
                        Let's do this
                    </Link>
                </div>
            </div>
            <div className='container mx-auto px-4 py-10'>
                <div className='flex flex-col items-center'>
                    <div className='mb-6'>
                        <span className='text-4 xl tracking-widest font-bebas-neue font-bold'>Shreyas Nandanwar</span>
                    </div>

                    <div className='flex space-x-4 mb-6'>
                        <a href="https://x.com/ShreyasNan0400" className={iconClass}><FaTwitter /></a>
                        <a href="https://dribbble.com/shreyasNAN0400" className={iconClass}><FaDribbble /></a>
                        <a href="https://www.linkedin.com/in/shreyas-nandanwar/" className={iconClass}><FaLinkedin /></a>
                        <a href="https://github.com/ShreyasNandanwar" className={iconClass}><FaGithub /></a>
                        <a href="https://medium.com/@shreyasnandanwar0400" className={iconClass}><SiMedium /></a>
                        <a href="shreyasnandanwar0400@gmail.com" className={iconClass}><FaEnvelope /></a>
                    </div>

                    <p className='text-sm font-playfair'>
                        Handcrafted by me © 2024
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
