import { Link } from 'react-router-dom';
import LangSwitch from '../LangSwitch/LangSwitch';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';

import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.header}>
      <Link to={`/`} className={css.logo} data-text="WATERCONTROL">
        WaterControl
      </Link>
      <ThemeToggle />
      <LangSwitch />
    </div>
  );
};

export default Logo;
