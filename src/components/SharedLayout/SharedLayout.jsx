import { Suspense, useEffect, useState } from 'react';
import LoaderText from '../LoaderText/LoaderText';

import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnline = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOnline);

    return () => {
      window.removeEventListener('online', updateOnline);
      window.removeEventListener('offline', updateOnline);
    };
  }, []);

  return (
    <div className={css.container}>
      {!isOnline && (
        <div className={css.modalBackdrop}>
          <div className={css.modal}>
            <h2>No internet connection</h2>
            <p>Check the connection and try again.</p>
          </div>
        </div>
      )}

      <Suspense fallback={<LoaderText />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
