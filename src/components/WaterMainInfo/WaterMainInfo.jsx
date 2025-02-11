import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectWaterRate, selectUserEmail } from '../../redux/auth/selectors';

import Logo from '../Logo/Logo';
import BtnAddWater from '../BtnAddWater/BtnAddWater';
import BtnAdmin from '../BtnAdmin/BtnAdmin';

import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';

import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  const { t } = useTranslation();
  const waterRate = useSelector(selectWaterRate);
  const userAccess = useSelector(selectUserEmail);

  const adminEmail = import.meta.env.VITE_API_ADMIN_EMAIL;

  const waterRateString =
    waterRate < 1 ? `${waterRate * 1000} ${t('ml')}` : `${waterRate} ${t('l')}`;
  return (
    <div className={css.waterContainer}>
      <Logo className={css.waterTitle} />

      {waterRate === 0 ? (
        ''
      ) : (
        <div className={css.normaContainer}>
          <h2 className={css.normaL}>{waterRateString}</h2>
          <p className={css.normaText}>{t('dailyNorm')}</p>
        </div>
      )}
      {waterRate === 0 ? '' : <WaterProgressBar />}
      {waterRate === 0 ? '' : <BtnAddWater />}
      {userAccess === adminEmail && <BtnAdmin />}
    </div>
  );
};

export default WaterMainInfo;
