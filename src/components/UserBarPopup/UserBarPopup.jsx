import { useCallback } from 'react';

import { useModal } from '../../hooks/useModal.js';
import ModalLogOut from '../ModalLogOut/ModalLogOut.jsx';
import sprite from '../../assets/sprite.svg';

import css from './UserBarPopup.module.css';

const UserBarPopup = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openSettingsModal = useCallback(() => {
    setModal(<div>ModalUserSetting</div>);
  }, [setModal]);

  const openModalLogOut = useCallback(() => {
    setModal(<ModalLogOut onClose={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <div className={css.userBarPopup}>
      <ul className={css.userBarPopupList}>
        <li className={css.userBarPopupListItem} onClick={openSettingsModal}>
          <svg className={css.userBarPopupIcon}>
            <use xlinkHref={`${sprite}#icon-settings`}></use>
          </svg>
          Профіль
        </li>

        <li className={css.userBarPopupListItem} onClick={openModalLogOut}>
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
