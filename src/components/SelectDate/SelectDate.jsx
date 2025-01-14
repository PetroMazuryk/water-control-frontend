import { useParams } from 'react-router-dom';

import { parseDateTime } from '../../helpers/parseDate.js';
import { getDateMonthString } from '../../helpers/getDateMonthString.js';

import css from './SelectDate.module.css';

const SelectDate = () => {
  const { date } = useParams();
  const { isToday, day, month } = getDateMonthString(parseDateTime(date));

  const dateString = isToday ? 'Сьогодні' : `${day} ${month + 'Day'}`;
  return <h3 className={css.selectedDate}>{dateString}</h3>;
};
export default SelectDate;
