import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { parseDateTime } from '../../helpers/parseDate.js';
import { getDateMonthString } from '../../helpers/getDateMonthString.js';

import css from './SelectDate.module.css';

const SelectDate = ({ className }) => {
  const { t } = useTranslation();
  const { date } = useParams();
  const { isToday, day, month } = getDateMonthString(parseDateTime(date));

  const dateString = isToday ? t('today') : `${day} ${month}`;
  return <p className={clsx(css.selectedDate, className)}>{dateString}</p>;
};
export default SelectDate;
