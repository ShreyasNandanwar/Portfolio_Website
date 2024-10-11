import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('section');
    
    sections.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });

      tl.fromTo(section, 
        { 
          autoAlpha: 0,
          y: 50 
        },
        { 
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
        }
      );

      // Fade out the previous section
      if (index > 0) {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(sections[index - 1], {
              autoAlpha: 1 - self.progress,
              y: -50 * self.progress,
              ease: "power2.inOut",
            });
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export default useScrollAnimation;