
import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Apply clean tech class to body
    document.body.classList.add("shrinkwave-clean-tech-style");

    // Enhanced scroll reveal animation for clean tech design
    const elements = document.querySelectorAll("section, .grid, .card, .plan-card, .tier-card, .pricing-tier, .faq-item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
          element.style.transition = "all 0.8s ease";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Set initial state and observe elements
    elements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition = "all 0.8s ease";
      observer.observe(el);
    });

    // Enhanced smooth scrolling for anchor links with offset
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      observer.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};
