import React from 'react'
import {motion} from 'framer-motion'
import {blogPosts} from '../data/BlogPosts'

const BlogPost = ({title, excerpt, date, readTime, link}) => (
    <motion.div
    whileHover={{scale:1.03}}
    className='bg-white dark:bg-gray-800 py-6 rounded-lg shadow-md'>
        <h3 className='text-xl font-semibold font-roboto mb-2'>{title}</h3>
        <div className='flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2'>
             <span className='font-playfair'>{date}</span>
             <span className='font-playfair'>{readTime} min read</span>
        </div>
        <p className='mb-4 text-gray-700 dark:text-gray-300 font-playfair'>{excerpt}</p>
        <a href={link} className='text-blue-500 hover:underline font-medium font-playfair'>Read more</a>
    </motion.div>
);

const BlogCategory = ({title, posts}) => (
    <div className='mb-12'>
        <h3 className='text-2xl font-bold mb-6 font-roboto'>{title}</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {posts.map((post, index) => (
                <BlogPost key={index} {...post} />
            )) }
        </div>
    </div>
);


const Blog = ({id}) => {
  return (
    <section id='blog'
    className='py-20'>
        <h2 className='text-3xl font bold font-roboto mb-12 text-center'>Blog Posts</h2>
        <div
        className='space-y-6'>
            <BlogCategory title="Latest Posts" posts={blogPosts.latest} />
            <BlogCategory title="Featured Posts" posts={blogPosts.featured} />
        </div>
    </section>
  )
}

export default Blog