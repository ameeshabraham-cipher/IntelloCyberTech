import { useEffect } from 'react';

// Define a type for the observation options
type ObserveElementsOptions = {
  threshold?: number;
  rootMargin?: string;
  animateOnce?: boolean;
  delay?: number;
};

export const useScrollReveal = ({
  threshold = 0.1,
  rootMargin = '0px',
  animateOnce = true,
  delay = 0,
}: ObserveElementsOptions = {}) => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const elementDelay = Number(element.dataset.delay || delay);
          
          setTimeout(() => {
            element.classList.add('active');
          }, elementDelay);
          
          if (animateOnce) {
            observer.unobserve(element);
          }
        } else if (!animateOnce) {
          entry.target.classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin,
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [threshold, rootMargin, animateOnce, delay]);
};

export const useNavbarScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;
      
      if (window.scrollY > 50) {
        navbar.classList.add('bg-card/95', 'backdrop-blur-md', 'shadow-lg');
      } else {
        navbar.classList.remove('bg-card/95', 'backdrop-blur-md', 'shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
