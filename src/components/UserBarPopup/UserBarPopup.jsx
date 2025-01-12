import { useCallback } from 'react';

import sprite from '../../assets/sprite.svg';
import { useModal } from '../../hooks/useModal.js';

import css from './UserBarPopup.module.css';

const UserBarPopup = () => {
  const setModal = useModal();

  const openSettingsModal = useCallback(() => {
    setModal(<div>ModalUserSetting</div>);
  }, [setModal]);

  const openLogOutModal = useCallback(() => {
    setModal(<div>ModalLogOut</div>);
  }, [setModal]);

  return (
    <div className={css.userBarPopup}>
      <ul className={css.userBarPopupList}>
        <li className={css.userBarPopupListItem} onClick={openSettingsModal}>
          <svg className={css.userBarPopupIcon}>
            <use xlinkHref={`${sprite}#icon-settings`}></use>
          </svg>
          Профіль
        </li>

        <li className={css.userBarPopupListItem} onClick={openLogOutModal}>
          <svg className={css.userBarPopupIcon}>
            <use xlinkHref={`${sprite}#icon-log-out`}></use>
          </svg>
          Вийти
        </li>
      </ul>
    </div>
  );
};

export default UserBarPopup;
