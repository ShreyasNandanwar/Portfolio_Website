import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import VisibilitySensor from 'react-visibility-sensor';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { gsap } from 'gsap'

const PullRequestItem = ({ pr }) => (
    <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className='bg-white dark:bg-gray-700 px-3 py-2 rounded-lg shadow-md mb-4'
            >
                <h4 className='text-lg font-semibold font-roboto mb-2'>{pr.title}</h4>
                <p className='text-sm font-playfair text-gray-600 dark:text-gray-300 mb-2'>{pr.repo_name}</p>
                <div className='flex justify-between items-center'>
                    <span className={`px-2 py-1 rounded-full text-xs font-playfair ${pr.state === 'open' ? 'bg-green-200 text-green-800' : 'bg-purple-200 text-purple-800'
                        }`}>
                        {pr.state}
                    </span>
                    <a
                        href={pr.html_url}
                        target="_blank"
                        rel='noopener noreferrer'
                        className='text-blue-500 hover:underline text-sm font-playfair'
                    >
                        View PR
                    </a>
                </div>
            </motion.div>
        )}
    </VisibilitySensor>
);

const RepositoryItem = ({ repo }) => (
    <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className='bg-white dark:bg-gray-700 rounded-lg shadow-md mb-4 px-3 py-2'
            >
                <h3 className='text-xl font-semibold mb-2 font-roboto'>
                    {repo.name}
                </h3>
                <p className='mb-2 font-playfair'>{repo.description || "no description available"}</p>
                <div className='flex space-x-4'>
                    <span className='text-sm text-gray-600 dark:text-gray-400 font-playfair' >⭐ {repo.stargazers_count}</span>
                    <span className='text-sm text-gray-600 dark:text-gray-400 font-playfair'>🍴 {repo.forks_count}</span>
                </div>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-sm text-blue-500 hover:underline font-playfair'
                >
                    View on Github
                </a>
            </motion.div>
        )}
    </VisibilitySensor>
);


const AnimateBackground = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        const shapes = bgRef.current.children;
        gsap.set(shapes, { opacity: 0, scale: 0 });
        gsap.to(shapes, {
            opacity: 0.5,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        })
    }, []);

    return (
        <div ref={bgRef} className='absolute inset-0 -z-10 overflow-hidden'>
            <svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
                <circle cx="10%" cy="10%" r="50" fill="#3B82F6" />
                <rect x="80%" y="60%" width="100" height="100" fill="#10B981" />
                <polygon points="50,5 100,100 0,100" fill="#F59E0B" />
            </svg>
        </div>
    );
};


const OpenSource = ({ id }) => {
    const [contributions, setContributions] = useState([]);
    const [pullRequests, setPullRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [reposResponse, prsResponse] = await Promise.all([
                    axios.get('https://api.github.com/users/ShreyasNandanwar/repos'),
                    axios.get('https://api.github.com/search/issues?q=author:ShreyasNandanwar+type:pr'),
                ]);

                const contributedRepos = reposResponse.data.filter(repo => !repo.fork).slice(0, 5);
                setContributions(contributedRepos);

                const recentPRs = prsResponse.data.items.slice(0, 5).map(pr => ({
                    id: pr.id,
                    title: pr.title,
                    repo_name: pr.repository_url.split('/').slice(-1)[0],
                    state: pr.state,
                    html_url: pr.html_url,
                }));
                setPullRequests(recentPRs);

                setLoading(false);

            } catch (error) {
                setError('Failed to fetch data from Github', error);
                setLoading(false);
            }
        };
        fetchData();

    }, []);



    return (
        <section id="Open Source" className='py-20 relative'>
            <AnimateBackground />
            <h2 className='text-3xl font-bold mb-8 text-center font-roboto'>Open Source Contributions</h2>


            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <h3 className='text-2xl font-semibold font-roboto mb-4'>Top Repositories</h3>
                    <div className='space-y-6'>
                        {loading ? (
                            Array(5).fill().map((_, index) => (
                                <Skeleton key={index} height={150} className='mb-4' />
                            ))
                        ) : (
                            contributions.map((repo) => (
                                <RepositoryItem key={repo.id} repo={repo} />
                            ))
                        )}
                    </div>
                </div>

                <div>
                    <h3 className='text-2xl font-semibold font-roboto mb-4'> Recent Pull Requests</h3>
                    <div className='space-y-6'>
                        {loading ? (
                            Array(5).fill().map((_, index) => (
                                <Skeleton key={index} height={150} className='mb-4' />
                            ))
                        ) : (
                            pullRequests.map((pr) => (
                                <PullRequestItem key={pr.id} pr={pr} />
                            ))
                        )}
                    </div>
                </div>
            </div>
            {error && <p className='text-red-800 mt-4'>{error}</p>}


        </section>
    )
}

export default OpenSource
