import css from './WaterMainInfo.module.css';
import Logo from '../Logo/Logo';

const WaterMainInfo = () => {
  const waterRate = 2;

  const waterRateString =
    waterRate < 1 ? `${waterRate * 1000} ${'мл'}` : `${waterRate} ${'л'}`;
  return (
    <div className={css.waterContainer}>
      <Logo className={css.waterTitle} />

      {waterRate === 0 ? (
        ''
      ) : (
        <div className={css.normaContainer}>
          <h2 className={css.normaL}>{waterRateString}</h2>
          <p className={css.normaText}>Моя щоденна норма</p>
        </div>
      )}
      {waterRate === 0 ? '' : <div>WaterProgressBar</div>}
      {waterRate === 0 ? <div> BtnUserSet</div> : <div>AddWaterBtn</div>}
    </div>
  );
};

export default WaterMainInfo;
