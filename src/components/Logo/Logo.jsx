import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link to={`/`} className={css.logo}>
      WaterControl
    </Link>
  );
};

export default Logo;
