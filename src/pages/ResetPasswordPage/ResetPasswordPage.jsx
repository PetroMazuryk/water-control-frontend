import { useState } from 'react';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/Logo/Logo';

import { resetPassword } from '../../redux/auth/operations';

import sprite from '../../assets/sprite.svg';
import css from './ResetPasswordPage.module.css';

const ResetPasswordPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = new URLSearchParams(location.search).get('token');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const schema = Yup.object({
    password: Yup.string()
      .required('Потрібен пароль')
      .min(7, 'Пароль має містити принаймні 7 символів')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        'Пароль повинен містити літери та цифри'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Паролі мають збігатися')
      .required('Підтвердження пароля є обов’язковим'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async ({ password }) => {
    try {
      await dispatch(resetPassword({ token, password })).unwrap();
      toast.success('Пароль успішно змінено');
      reset();
      navigate('/login');
    } catch {
      toast.error('Не вдалося змінити пароль');
    }
  };

  return (
    <section className={css.resetComponent}>
      <Logo />
      <div className="container">
        <form
          className={css.resetForm}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h2 className={css.resetTitle}>{t('changePassword')}</h2>

          <label className={css.resetLabel}>
            <span>{t('newPassword')}</span>
            <span className={css.resetPassword}>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder={t('placeholderNewPassword')}
                className={clsx(css.resetInput, {
                  [css.resetInputError]: errors.password,
                })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={css.passwordIconBtn}
              >
                <svg className={css.passwordIcon}>
                  <use
                    href={`${sprite}#${
                      showPassword ? 'icon-eye' : 'icon-eye-off'
                    }`}
                  />
                </svg>
              </button>
            </span>
            {errors.password && (
              <p className={css.resetErrorMessage}>{errors.password.message}</p>
            )}
          </label>

          <label className={css.resetLabel}>
            <span>{t('confirmPassword')}</span>
            <span className={css.resetPassword}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="Повторіть пароль"
                className={clsx(css.resetInput, {
                  [css.resetInputError]: errors.confirmPassword,
                })}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className={css.passwordIconBtn}
              >
                <svg className={css.passwordIcon}>
                  <use
                    href={`${sprite}#${
                      showConfirmPassword ? 'icon-eye' : 'icon-eye-off'
                    }`}
                  />
                </svg>
              </button>
            </span>
            {errors.confirmPassword && (
              <p className={css.resetErrorMessage}>
                {errors.confirmPassword.message}
              </p>
            )}
          </label>

          <div className={css.resetButtonsContainer}>
            <button
              type="button"
              className={css.resetBtn}
              onClick={() => navigate('/login')}
            >
              Скасувати
            </button>

            <button
              type="submit"
              className={css.resetBtn}
              disabled={isSubmitting}
            >
              Змінити пароль
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
