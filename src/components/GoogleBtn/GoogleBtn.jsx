import css from './GoogleBtn.module.css';

const GoogleBtn = () => {
  return (
    <a className={css.btn} href="http://localhost:3000/users/google">
      Продовжити з Google
    </a>
  );
};

export default GoogleBtn;
