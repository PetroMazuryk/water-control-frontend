import { useCallback } from 'react';
import { Trans } from 'react-i18next';
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
      <Trans
        i18nKey="forgotPasswordMessage"
        components={{
          btn: (
            <button
              type="button"
              className={css.forgotPasswordBtn}
              onClick={openModal}
            />
          ),
        }}
      />
    </p>
  );
};

export default BtnForgotPassword;
