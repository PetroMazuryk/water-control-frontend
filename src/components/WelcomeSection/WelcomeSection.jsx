import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../Logo/Logo';
import LangSwitch from '../LangSwitch/LangSwitch';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useTranslation } from 'react-i18next';

import css from './WelcomeSection.module.css';

const WelcomeSection = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.welcomeSection}>
      <div className={css.header}>
        <Logo />
        <LangSwitch />
      </div>
      <div className={css.welcomeSectionContainer}>
        <p className={css.welcomeSectionDescribe}>{t('recordWater')}</p>
        <h1 className={css.welcomeSectionTitle}>{t('waterTitle')}</h1>
        <div className={css.welcomeSectionLinks}>
          {isLoggedIn ? (
            <Link
              to={`/water/${Date.now()}`}
              className={`${css.welcomeSectionLink} ${css.welcomeSectionLinkSignup}`}
            >
              {t('checkWater')}
            </Link>
          ) : (
            <>
              <Link
                to={`/register`}
                className={`${css.welcomeSectionLink} ${css.welcomeSectionLinkSignup}`}
              >
                {t('tryWater')}
              </Link>
              <Link
                to={`/login`}
                className={`${css.welcomeSectionLink} ${css.welcomeSectionLinkSignin}`}
              >
                {t('logIn')}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
