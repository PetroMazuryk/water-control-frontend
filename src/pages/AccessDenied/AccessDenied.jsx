import { Link } from 'react-router-dom';
import css from './AccessDenied.module.css';

const AccessDenied = () => {
  return (
    <div className={css.container}>
      <h1>Доступ заборонено</h1>
      <p>У вас немає доступу до цієї сторінки.</p>
      <Link to="/">Повернутися на головну</Link>
    </div>
  );
};

export default AccessDenied;
