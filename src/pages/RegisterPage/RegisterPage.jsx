import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import FormWrapper from '../../components/FormWrapper/FormWrapper';
import FormRegister from '../../components/FormRegister/FormRegister';
import FormFooter from '../../components/FormFooter/FormFooter';
import { useTranslation } from 'react-i18next';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <div className={css.registerPage}>
      <FormWrapper>
        <FormRegister />
        <FormFooter
          link="/login"
         text={t('footerText')}
         linkName={t('logIn')}
        />
      </FormWrapper>

      <div className={css.registerPageRight}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default RegisterPage;
