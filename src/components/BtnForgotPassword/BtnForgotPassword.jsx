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
    <p className={css.textBtn}>
      Забули пароль?
      <button
        type="button"
        className={css.forgotPasswordBtn}
        onClick={openModal}
      >
        Натисніть сюди
      </button>
      для зміни паролю
    </p>
  );
};

export default BtnForgotPassword;
