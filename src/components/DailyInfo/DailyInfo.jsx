import SelectDate from '../SelectDate/SelectDate';
import BtnAddWaterSecond from '../BtnAddWaterSecond/BtnAddWaterSecond';
import BtnDelete from '../BtnDelete/BtnDelete';
import ModalDelete from '../ModalDelete/ModalDelete';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <div className={css.info}>
      <div className={css.header}>
        <SelectDate />
        <BtnAddWaterSecond />
      </div>
      <BtnDelete />
      <ModalDelete />
    </div>
  );
};

export default DailyInfo;
