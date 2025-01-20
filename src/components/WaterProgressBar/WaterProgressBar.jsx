// import { selectWaterRate } from '../../redux/auth/selectors';
import { selectWaterDailyRecord } from '../../redux/water/selectors';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import css from './WaterProgressBar.module.css';
import SelectDate from '../SelectDate/SelectDate';

// const WaterProgressBar = () => {
//   const currentWater = useSelector((state) => state.water.todayAmount.value);

//   const aim = useSelector(selectWaterRate);

//   const calculatedPercentage = Math.round((currentWater / (aim * 1000)) * 100);

//   const percentage = calculatedPercentage >= 100 ? 100 : calculatedPercentage;
//   const isBelowAim = currentWater < aim * 1000;

//   return (
//     <div className={css.progressBarContainer}>
//       <h2 className={css.progressBarTitle}>Сьогодні</h2>
//       <div className={css.progressBar}>
//         <div
//           className={clsx(css.progressBarFill, {
//             [css.belowAim]: isBelowAim,
//             [css.aboveAim]: !isBelowAim,
//           })}
//           style={{
//             width: `${percentage}%`,
//           }}
//         >
//           <p
//             className={clsx(css.percentNumber, {
//               [css.belowAimRate]: isBelowAim,
//               [css.aboveAimRate]: !isBelowAim,
//             })}
//           >
//             {isBelowAim ? `${percentage.toFixed(0)}%` : 'норма'}
//           </p>
//           <div
//             className={clsx(css.ball, {
//               [css.belowAim]: isBelowAim,
//               [css.aboveAim]: !isBelowAim,
//             })}
//           ></div>
//         </div>
//       </div>
//       <div className={css.percentContainer}>
//         <p className={css.percent}>0%</p>
//         <p className={css.percent}>50%</p>
//         <p className={css.percent}>100%</p>
//       </div>
//     </div>
//   );
// };
// =======================
// // export default WaterProgressBar;
const WaterProgressBar = () => {
  // Отримати дані через селектор
  const data = useSelector(selectWaterDailyRecord);

  // Функція для розрахунку сумарного відсотка+++++=====
  const calculateTotalPercentage = (data) => {
    if (!data || data.length === 0) return 0; // Перевірка на випадок, якщо масив порожній
    return data.reduce((total, entry) => total + entry.percentage, 0);
  };

  const totalPercentage = calculateTotalPercentage(data);

  return (
    <div className={css.progressBarContainer}>
      <h3 className={css.progressBarTitle}>
        <SelectDate />
      </h3>
      <div className={css.progressBar}>
        <div
          className={clsx(css.progressBarFill, {
            [css.belowAim]: totalPercentage < 100,
            [css.aboveAim]: totalPercentage >= 100,
          })}
          style={{
            width: `${totalPercentage > 100 ? 100 : totalPercentage}%`,
          }}
        >
          <p
            className={clsx(css.percentNumber, {
              [css.belowAimRate]: totalPercentage < 100,
              [css.aboveAimRate]: totalPercentage >= 100,
            })}
          >
            {totalPercentage >= 100
              ? 'Норма'
              : `${totalPercentage.toFixed(0)}%`}
          </p>
        </div>
      </div>
      <div className={css.percentContainer}>
        <p className={css.percent}>0%</p>
        <p className={css.percent}>50%</p>
        <p className={css.percent}>100%</p>
      </div>
    </div>
  );
};

export default WaterProgressBar;
