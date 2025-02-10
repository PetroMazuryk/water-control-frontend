import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../hooks/useModal';
import ModalAdmin from '../ModalAdmin/ModalAdmin';
import sprite from '../../assets/sprite.svg';

import css from './BtnAdmin.module.css';

const BtnAdmin = () => {
  const { t } = useTranslation();
  const setModal = useModal();

  const openModal = useCallback(() => {
    setModal(<ModalAdmin onClose={() => setModal(null)} />);
  }, [setModal]);

  return (
    <button type="button" className={css.btnAdd} onClick={openModal}>
      <svg className={css.plus}>
        <use xlinkHref={`${sprite}#icon-admin`} />
      </svg>
      <h2 className={css.btnText}>{t('adminBtn')}</h2>
    </button>
  );
};

export default BtnAdmin;
