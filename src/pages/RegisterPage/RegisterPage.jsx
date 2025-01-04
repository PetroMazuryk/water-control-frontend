import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.registerPage}>
      <div>
        SignFormWrapper
        <div>RegisterForm</div>
        <div>RegisterFormFooter</div>
      </div>
      <div className={css.registerPageRight}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default RegisterPage;
