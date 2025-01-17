import Logo from '../Logo/Logo';
import AddWaterBtn from '../BtnAddWater/BtnAddWater';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import FormSettings from '../FormSettings/FormSettings';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  const waterRate = 2;

  const waterRateString =
    waterRate < 1 ? `${waterRate * 1000} ${'мл'}` : `${waterRate} ${'л'}`;
  return (
    <div>
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
        {waterRate === 0 ? '' : <WaterProgressBar />}
        {waterRate === 0 ? <div> BtnUserSet</div> : <AddWaterBtn />}
      </div>
      <FormSettings />
    </div>
  );
};

export default WaterMainInfo;
