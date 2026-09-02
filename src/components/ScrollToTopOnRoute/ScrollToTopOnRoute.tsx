import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTopOnRoute;
