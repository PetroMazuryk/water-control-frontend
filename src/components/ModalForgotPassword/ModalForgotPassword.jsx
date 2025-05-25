import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ANIMATION } from '../../constants/constants.js';
import { sendResetEmail } from '../../redux/auth/operations.js';

import sprite from '../../assets/sprite.svg';
import css from './ModalForgotPassword.module.css';

const ModalForgotPassword = ({ onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: '' },
  });

  const handleClose = () => {
    const id = setTimeout(() => {
      onClose();
      clearTimeout(id);
    }, ANIMATION.DURATION);
  };

  const onSubmit = async ({ email }) => {
    try {
      await dispatch(sendResetEmail(email)).unwrap();
      toast.success('Посилання для скидання паролю успішно надіслано');
      reset();
    } catch (error) {
      toast.error(
        typeof error === 'string' ? error : 'Сталася помилка. Спробуйте ще раз.'
      );
    }
  };

  return (
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
        <p className={css.modalText}>
          Ми надішлемо вам електронного листа з посиланням для скидання пароля.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.modalForm}>
        <input
          type="email"
          placeholder="Введіть свою електронну пошту"
          {...register('email', {
            required: 'Обовʼязково введіть email',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Некоректний формат електронної пошти',
            },
          })}
          className={`${css.inputField} ${errors.email ? css.errorInput : ''}`}
        />
        {errors.email && (
          <div className={css.error}>{errors.email.message}</div>
        )}

        <div className={css.modalBtnBox}>
          <button type="submit" className={css.btnSend} disabled={isSubmitting}>
            {isSubmitting
              ? 'Надсилання...'
              : 'Відправити посилання для скидання паролю'}
          </button>
          <button type="button" className={css.btnCancel} onClick={handleClose}>
            Відміна
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalForgotPassword;
