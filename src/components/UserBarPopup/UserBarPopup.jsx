import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../hooks/useModal.js';
import ModalLogout from '../ModalLogout/ModalLogout.jsx';
import ModalSettings from '../ModalSettings/ModalSettings.jsx';
import sprite from '../../assets/sprite.svg';

import css from './UserBarPopup.module.css';

const UserBarPopup = () => {
  const { t } = useTranslation();
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openSettingsModal = useCallback(() => {
    setModal(<ModalSettings onClose={closeModal} />);
  }, [setModal, closeModal]);

  const openModalLogOut = useCallback(() => {
    setModal(<ModalLogout onClose={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <div className={css.userBarPopup}>
      <ul className={css.userBarPopupList}>
        <li className={css.userBarPopupListItem} onClick={openSettingsModal}>
          <svg className={css.userBarPopupIcon}>
            <use xlinkHref={`${sprite}#icon-settings`}></use>
          </svg>
          {t('settingLink')}
        </li>

        <li className={css.userBarPopupListItem} onClick={openModalLogOut}>
          <svg className={css.userBarPopupIcon}>
            <use xlinkHref={`${sprite}#icon-log-out`}></use>
          </svg>
          {t('logout')}
        </li>
      </ul>
    </div>
  );
};

export default UserBarPopup;
