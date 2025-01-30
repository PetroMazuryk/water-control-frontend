import clsx from 'clsx';
import i18next from 'i18next';
import { useRef, useState } from 'react';
import LangSwitchBar from '../LangSwitchBar/LangSwitchBar';
import { LOCALS } from '../../i18n/constants';

import sprite from '../../assets/sprite.svg';
import css from './LangSwitch.module.css';

const LangSwitch = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const barPopoverRef = useRef(null);

  const lanString = (lan) => {
    const langs = Object.values(LOCALS);
    const isExist = langs.includes(lan);
    const langRes = isExist ? lan : 'en';
    return langRes.toUpperCase();
  };
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClose = (e) => {
    if (barPopoverRef.current && !barPopoverRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className={css.langSwitch}>
      <button
        onClick={toggleDropdown}
        className={css.currentLang}
        name="openPopover"
      >
        {lanString(i18next.language)}
        <svg className={clsx(css.icon, { [css.isOpen]: isDropdownOpen })}>
          <use xlinkHref={sprite + '#icon-chevron-down'}></use>
        </svg>
      </button>
      {isDropdownOpen && (
        <LangSwitchBar onClose={handleClose} ref={barPopoverRef} />
      )}
    </div>
  );
};

export default LangSwitch;
