import React, { useState, useEffect } from 'react';
import Smallhome from './Smallhome';
import Large from './Large';

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <Smallhome />
      ) : (
        <Large />
      )}
    </div>
  );
};

export default Home;
