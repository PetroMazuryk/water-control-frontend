import { photoOne, photoTwo, photoTree } from '../../assets/images';
import css from './AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={css.advantagesSection}>
      <div className={css.userCount}>
        <div className={css.userCountComponent}>
          <ul className={css.userCountList}>
            <li className={css.userCountItem}>
              <img src={photoTree} alt="user" />
            </li>
            <li className={css.userCountItem}>
              <img src={photoOne} alt="user" />
            </li>
            <li className={css.userCountItem}>
              <img src={photoTwo} alt="user" />
            </li>
          </ul>
          <p className={css.userCountText}>
            Наші
            <span className={css.userCountTextColor}>щасливі</span> клієнти
          </p>
        </div>
      </div>

      <ul className={css.advantagesList}>
        <li className={css.advantagesHabit}>Вироблення звички</li>
        <li className={css.advantagesStatistics}>Статистики</li>
        <li className={css.advantagesSetting}>Налаштування особистої норми</li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
