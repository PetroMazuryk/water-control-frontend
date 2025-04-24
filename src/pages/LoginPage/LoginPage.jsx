import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import FormWrapper from '../../components/FormWrapper/FormWrapper';
import FormLogin from '../../components/FormLogin/FormLogin';
import FormFooter from '../../components/FormFooter/FormFooter';
import { useTranslation } from 'react-i18next';

import css from '../RegisterPage/RegisterPage.module.css';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className={css.registerPage}>
      <FormWrapper>
        <FormLogin />
        <FormFooter
          link="/register"
          text={t('footerText')}
          linkName="Зареєструватися"
        />
      </FormWrapper>

      <div className={css.registerPageRight}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default LoginPage;
