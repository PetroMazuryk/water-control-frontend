import BtnLogout from '../../components/BtnLogout/BtnLogout';
import UserBarPopup from '../../components/UserBarPopup/UserBarPopup';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
const WaterControlPage = () => {
  return (
    <div>
      <WaterMainInfo />
      <BtnLogout />
      <UserBarPopup />
    </div>
  );
};

export default WaterControlPage;
