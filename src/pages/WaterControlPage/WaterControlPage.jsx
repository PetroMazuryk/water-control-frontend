import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';

import css from './WaterControlPage.module.css';

const WaterControlPage = () => {
  return (
    <div className={css.waterPage}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default WaterControlPage;
