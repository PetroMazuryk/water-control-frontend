import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { parseDateTime } from '../../helpers/parseDate.js';
import {
  fetchTodayWater,
  fetchDailyWater,
  fetchMonthlyWater,
  fetchWeeklyWater,
} from '../../redux/water/operations.js';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo.jsx';

import css from './WaterControlPage.module.css';

const WaterControlPage = () => {
  const { date } = useParams();
  const parsedDate = parseDateTime(date).getTime();
  const dispatch = useDispatch();
  const [isRefreshingPage, setIsRefreshingPage] = useState(true);

  useEffect(() => {
    if (isRefreshingPage) {
      const formattedDate = Date.now();
      dispatch(fetchTodayWater());
      dispatch(fetchDailyWater(parsedDate));
      dispatch(fetchMonthlyWater(parsedDate));
      dispatch(fetchWeeklyWater(formattedDate));
      setIsRefreshingPage(false);
    }
  }, [isRefreshingPage, parsedDate, dispatch]);

  return (
    <div className={css.waterPage}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default WaterControlPage;
