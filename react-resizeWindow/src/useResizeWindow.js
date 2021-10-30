import { useState, useEffect } from "react";

const useResizeWindow = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    // ADDS AND EVENTLISTENER
    window.addEventListener("resize", handleResize);
    // REMOVES THE EVENT LISTENER WHEN THE COMPONENT IS UNMOUNTED
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [size.width, size.height];
};

export default useResizeWindow;
