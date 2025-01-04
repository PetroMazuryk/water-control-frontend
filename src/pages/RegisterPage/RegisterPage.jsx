import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import FormWrapper from '../../components/FormWrapper/FormWrapper';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.registerPage}>
      <FormWrapper>
        <div>RegisterForm</div>
        <div>RegisterFormFooter</div>
      </FormWrapper>

      <div className={css.registerPageRight}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default RegisterPage;
