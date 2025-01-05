import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';

import css from './BtnLogout.module.css';

const BtnLogout = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <button
      className={css.btnLogout}
      onClick={handleLogout}
      disabled={isLoading}
    >
      {isLoading ? 'Вихід...' : 'Вийти'}
    </button>
  );
};

export default BtnLogout;
