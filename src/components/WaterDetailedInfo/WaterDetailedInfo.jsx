import UserPanel from '../UserPanel/UserPanel';
import DailyInfo from '../DailyInfo/DailyInfo';

import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  return (
    <section className={css.waterDetailedInfo}>
      <UserPanel />
      <DailyInfo />
    </section>
  );
};

export default WaterDetailedInfo;
