import React from 'react'
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectCard = ({ name, description, tools }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-3">
            <div>
                <h3 className='text-xl font-semibold font-roboto mb-2'>{name}</h3>
                <p className='text-sm font-playfair text-gray-600 dark:text-gray-300 mb-4'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {tools.map((tool, index) => (
                        <span
                            key={index}
                            className='px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-playfair'
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
const Projects = ({ id }) => {

    return (
        <section id="projects" className='py-20'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold font-roboto mb-8 text-center'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
