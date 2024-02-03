'use client'
import { useEffect, useState } from "react";
import Sections from "./sections";

function TechStack() {
    const [currentSection, setCurrentSection] = useState('');

    const extractStringAfterHash = (path: string) => {
      const hashIndex = path.indexOf('#');
      if (hashIndex === -1) {
        return path;
      }
      return path.substring(hashIndex + 1);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const sectionEls = document.querySelectorAll('.section');
        sectionEls.forEach((sectionEl) => {
          if (window.scrollY >= (sectionEl as HTMLElement).offsetTop - sectionEl.clientHeight / 5) {
            setCurrentSection(sectionEl.id);
          }
        });
  
        const navLinkEls = document.querySelectorAll('.content_link');
        navLinkEls.forEach((navEl) => {
          if (extractStringAfterHash((navEl as HTMLAnchorElement).href) === currentSection) {
            const activeEl = document.querySelector('.active');
            activeEl?.classList.remove('active');
            navEl.classList.add('active');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [currentSection]);

    return <Sections />
}

export default TechStack;