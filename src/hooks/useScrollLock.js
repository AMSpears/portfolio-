import React, { useEffect } from 'react';


const useScrollLock = (lock) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = '';
    };
  }, [lock]);
    
}

export default useScrollLock;