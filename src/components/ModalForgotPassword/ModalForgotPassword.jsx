import { useForm } from 'react-hook-form';
import { ANIMATION } from '../../constants/constants.js';

import sprite from '../../assets/sprite.svg';

import css from './ModalForgotPassword.module.css';

const ModalForgotPassword = ({ onClose }) => {
  const {
    register,
    handleSubmit,
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

  const onSubmit = async (data) => {
    console.log(data);
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
          <use xlinkHref={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      <div className={css.modalTextBox}>
        <h2 className={css.modalTitle}>Забули пароль? </h2>
        <p className={css.modalText}>
          Ми надішлемо вам електронний лист із посиланням для скидання пароля.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.modalForm}>
        <input
          type="email"
          placeholder="Введіть свою електронну пошту"
          {...register('email', {
            required: 'Валідація пошти',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Валідація пошти',
            },
          })}
          className={`${css.inputField} ${errors.email ? css.errorInput : ''}`}
        />
        {errors.email && (
          <div className={css.error}>{errors.email.message}</div>
        )}

        <div className={css.modalBtnBox}>
          <button type="submit" className={css.btnSend} disabled={isSubmitting}>
            Відправити посилання для скидання паролю
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
