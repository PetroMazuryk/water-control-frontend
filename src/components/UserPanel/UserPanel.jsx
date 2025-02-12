import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import UserBar from '../UserBar/UserBar.jsx';
import { selectUserName } from '../../redux/auth/selectors.js';
import { selectUserEmail } from '../../redux/auth/selectors.js';

import css from './UserPanel.module.css';

const UserPanel = () => {
  const { t } = useTranslation();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const emailUsername = userEmail ? userEmail.split('@')[0] : null;

  const displayName = userName === 'User' ? emailUsername : userName;

  return (
    <div className={css.userPanel}>
      <h1 className={css.userPanelTitle}>
        {t('hello')}
        <span className={css.userPanelTitleName}>{displayName}</span>
      </h1>
      <UserBar name={userName} />
    </div>
  );
};

export default UserPanel;
