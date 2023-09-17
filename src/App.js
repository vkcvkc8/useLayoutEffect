import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

function Example() {
  const [width, setWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const divRef = useRef();

  useLayoutEffect(() => {
    // Measure the width of the div element
    const newWidth = divRef.current.offsetWidth;

    // Update the state with the new width
    setWidth(newWidth);
  }, []); // Empty dependency array to run it only once after initial render

  useLayoutEffect(() => {
    // Update window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div ref={divRef}>Content inside the div</div>
      <p>Width of the div: {width}px</p>
      <p>Window Width: {windowWidth}px</p>
    </div>
  );
}

export default Example;
