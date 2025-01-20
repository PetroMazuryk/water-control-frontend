import { useCallback } from 'react';

import { useModal } from '../../hooks/useModal';

import sprite from '../../assets/sprite.svg';

import css from './BtnAdmin.module.css';

const BtnAdmin = () => {
  const setModal = useModal();

  const openModal = useCallback(() => {
    setModal(<div>ModalAdmin</div>);
  }, []);

  return (
    <button type="button" className={css.btnAdd} onClick={openModal}>
      <svg className={css.plus}>
        <use xlinkHref={`${sprite}#icon-admin`} />
      </svg>
      <h2 className={css.btnText}>Адмін</h2>
    </button>
  );
};

export default BtnAdmin;
