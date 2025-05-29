import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { ANIMATION } from '../../constants/constants.js';
import { sendResetEmail } from '../../redux/auth/operations.js';

import sprite from '../../assets/sprite.svg';
import css from './ModalForgotPassword.module.css';

const ModalForgotPassword = ({ onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const schemaValidation = Yup.object({
    email: Yup.string()
      .required(t('emailRequired'))
      .email(t('enterValidEmail')),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    defaultValues: { email: '' },
  });

  const handleClose = useCallback(() => {
    const id = setTimeout(() => {
      onClose();
      clearTimeout(id);
    }, ANIMATION);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const onSubmit = async ({ email }) => {
    try {
      await dispatch(sendResetEmail(email)).unwrap();
      toast.success(t('resetLinkSent'));
      reset();
    } catch (error) {
      toast.error(typeof error === 'string' ? error : t('errorDefault'));
    }
  };

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label="closeForgotPasswordModal"
          onClick={handleClose}
          className={css.closeBtn}
        >
          <svg className={css.svg}>
            <use xlinkHref={`${sprite}#icon-x`} />
          </svg>
        </button>

        <div className={css.modalTextBox}>
          <h2 className={css.modalTitle}>{t('forgotTitle')}</h2>
          <p className={css.modalText}>{t('forgotText')}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={css.modalForm}>
          <div className={css.inputWrapper}>
            <input
              type="email"
              {...register('email')}
              placeholder={t('placeholderEmail')}
              className={`${css.inputField} ${
                errors.email ? css.errorInput : ''
              }`}
            />
            <div className={`${css.error} ${!errors.email ? css.hidden : ''}`}>
              {errors.email?.message || ''}
            </div>
          </div>

          <div className={css.modalBtnBox}>
            <button
              type="submit"
              className={css.btnSend}
              disabled={isSubmitting}
            >
              {isSubmitting ? t('loadingText') : t('sendText')}
            </button>
            <button
              type="button"
              className={css.btnCancel}
              onClick={handleClose}
            >
              {t('cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForgotPassword;
