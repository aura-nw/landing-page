import { useEffect, useState } from "react";

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window
  return {
      width,
      height,
  }
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0}) 

  useEffect(() => {
      function handleResize() {
          setWindowSize(getWindowSize())
      }
      handleResize() 
      window.addEventListener('resize', handleResize)
      
      return () => { window.removeEventListener('resize', handleResize) }
  }, [])


  return { windowSize, isScreen2XL: windowSize.width < 1536, isMobile: windowSize.width < 1024 };
};

export default useWindowSize;