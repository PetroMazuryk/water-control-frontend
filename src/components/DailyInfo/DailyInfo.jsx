import SelectDate from '../SelectDate/SelectDate';
import BtnAddWaterSecond from '../BtnAddWaterSecond/BtnAddWaterSecond';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <div className={css.info}>
      <div className={css.header}>
        <SelectDate />
        <BtnAddWaterSecond />
      </div>
    </div>
  );
};

export default DailyInfo;
