import { useEffect, useState } from 'react';

export const useIsScrollAtBottom = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how close the user is to the bottom
      // window.innerHeight + window.scrollY = total scroll position from the top
      // document.documentElement.offsetHeight = the total height of the page
      const bottomProximity = 5 // Pixels from bottom to count as "at bottom"
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - bottomProximity;

      setIsAtBottom(reachedBottom);
      
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return isAtBottom;
};