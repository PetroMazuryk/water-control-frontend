import { useTranslation } from 'react-i18next';

import css from './GoogleBtn.module.css';

const GoogleBtn = () => {
  const { t } = useTranslation();

  return (
    <a className={css.btn} href="http://localhost:3000/users/google">
      {t('googleBtn')}
    </a>
  );
};

export default GoogleBtn;
