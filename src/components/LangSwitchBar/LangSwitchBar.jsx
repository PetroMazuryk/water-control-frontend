import { forwardRef, useEffect } from 'react';
import i18next from 'i18next';
import { LOCALS } from '../../i18n/constants';

import css from './LangSwitchBar.module.css';

const LangSwitchBar = forwardRef(function LangSwitchBar({ onClose }, ref) {
  const langs = Object.values(LOCALS);

  const handleLanguageChange = (lng) => {
    i18next.changeLanguage(lng);
    onClose(false);
  };

  useEffect(() => {
    window.addEventListener('click', onClose);
    return () => window.removeEventListener('click', onClose);
  }, [onClose, ref]);

  return (
    <ul className={css.barPopover} ref={ref}>
      {langs.map((len) => (
        <li key={len}>
          <button
            className={css.button}
            onClick={() => handleLanguageChange(len)}
          >
            {len.toLocaleUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  );
});

export default LangSwitchBar;
