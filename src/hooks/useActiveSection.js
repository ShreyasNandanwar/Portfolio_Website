import { useEffect, useState } from 'react'

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Section in view:', entry.target.id); // Debugging
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } // Lowered threshold for earlier detection
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => {
            observer.observe(section);
            console.log('Observing section:', section.id); // Debugging
        });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        }
    }, [])

    return activeSection;
}

export default useActiveSection