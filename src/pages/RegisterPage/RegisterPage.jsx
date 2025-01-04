import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import FormWrapper from '../../components/FormWrapper/FormWrapper';
import FormRegister from '../../components/FormRegister/FormRegister';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.registerPage}>
      <FormWrapper>
        <FormRegister />
        <div>RegisterFormFooter</div>
      </FormWrapper>

      <div className={css.registerPageRight}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default RegisterPage;
