import BtnLogout from '../../components/BtnLogout/BtnLogout';

import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import UserBar from '../../components/UserBar/UserBar';

const WaterControlPage = () => {
  return (
    <div>
      <WaterMainInfo />
      <BtnLogout />
      <UserBar />
    </div>
  );
};

export default WaterControlPage;
