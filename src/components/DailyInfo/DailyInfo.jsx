import SelectDate from '../SelectDate/SelectDate';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <div className={css.info}>
      <div className={css.header}>
        <SelectDate />
      </div>
    </div>
  );
};

export default DailyInfo;
