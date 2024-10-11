import React from 'react'
import { motion } from 'framer-motion';

const Hero = ({id}) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold font-lora m-4'>
                    Hi, I'm Shreyas Nandanwar
                </h1>
                <p className='text-3xl mb-8 font-cedarville-cursive'>
                    Passionate full-stack developer, crafting seamless digital experiences with code and creativity.
                </p>
                <a
                    href='#projects'
                    className='bg-blue-500 text-white font-playfair px-6 py-3 font-bold rounded-full hover:bg-blue-600 transition-colors'>
                        View My Work
                </a>
            </div>
        </motion.section>
    )
}

export default Hero
