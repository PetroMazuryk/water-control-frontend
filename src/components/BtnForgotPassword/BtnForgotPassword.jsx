import { useCallback } from 'react';

import { useModal } from '../../hooks/useModal';
import ModalForgotPassword from '../../components/ModalForgotPassword/ModalForgotPassword';
import css from './BtnForgotPassword.module.css';

const BtnForgotPassword = () => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<ModalForgotPassword onClose={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <button type="button" className={css.btnForgotPassword} onClick={openModal}>
      Забули пароль? Натисніть сюди для зміни паролю
    </button>
  );
};

export default BtnForgotPassword;
