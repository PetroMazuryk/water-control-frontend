import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import clsx from 'clsx';
import { selectIsLoading } from '../../redux/auth/selectors.js';
import { registration } from '../../redux/auth/operations.js';
import Loader from '../Loader/Loader.jsx';
import GoogleBtn from '../GoogleBtn/GoogleBtn.jsx';

import sprite from '../../assets/sprite.svg';
import css from './FormRegister.module.css';

const FormRegister = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const schemaValidation = Yup.object({
    email: Yup.string()
      .required('Потрібна електронна адреса')
      .email('Недійсна адреса електронної пошти'),
    password: Yup.string()
      .required('Потрібен пароль')
      .min(7, 'Пароль має містити принаймні 7 символів')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        'Пароль повинен містити принаймні одну літеру та одну цифру'
      ),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Паролі мають збігатися')
      .required('Будь ласка, підтвердьте свій пароль'),
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordRepeatVisibility = () =>
    setShowPasswordRepeat(!showPasswordRepeat);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const onSubmitForm = (data) => {
    const { email, password } = data;
    dispatch(registration({ email, password }));
  };

  return (
    <div className={css.registerComponent}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <h2 className={css.registerTitle}>{t('registration')}</h2>
        <div className={css.registerForm}>
          <label className={css.registerLabel}>
            {t('email')}
            <input
              className={clsx(css.registerInput, {
                [css.registerInputError]: errors.email?.message,
              })}
              {...register('email')}
              placeholder={t('placeholderEmail')}
            />
            {errors.email?.message && (
              <p className={css.registerErrorMessage}>
                {errors.email?.message}
              </p>
            )}
          </label>

          <label className={css.registerLabel}>
            <span>{t('password')}</span>
            <span className={css.registerPassword}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={clsx(css.registerInput, {
                  [css.registerInputError]: errors.password?.message,
                })}
                {...register('password')}
                placeholder={t('placeholderPassword')}
              />
              <button
                className={css.passwordIconBtn}
                type="button"
                onClick={togglePasswordVisibility}
              >
                <svg className={css.passwordIcon}>
                  <use
                    xlinkHref={`${sprite}#${
                      showPassword ? 'icon-eye' : 'icon-eye-off'
                    }`}
                  />
                </svg>
              </button>
            </span>
            {errors.password?.message && (
              <p className={css.registerErrorMessage}>
                {errors.password?.message}
              </p>
            )}
          </label>

          <label className={css.registerLabel}>
            <span>{t('repeatPassword')}</span>
            <span className={css.registerPassword}>
              <input
                type={showPasswordRepeat ? 'text' : 'password'}
                className={clsx(css.registerInput, {
                  [css.registerInputError]: errors.repeatPassword?.message,
                })}
                {...register('repeatPassword')}
                placeholder={t('repeatPassword')}
              />
              <button
                className={css.passwordIconBtn}
                type="button"
                onClick={togglePasswordRepeatVisibility}
              >
                <svg className={css.passwordIcon}>
                  <use
                    xlinkHref={`${sprite}#${
                      showPasswordRepeat ? 'icon-eye' : 'icon-eye-off'
                    }`}
                  />
                </svg>
              </button>
            </span>
            {errors.repeatPassword?.message && (
              <p className={css.registerErrorMessage}>
                {errors.repeatPassword?.message}
              </p>
            )}
          </label>
        </div>
        {isLoading ? (
          <div className={css.registerButtonsContainer}>
            <Loader height={44} width={44} label="Зареєструватися" />
          </div>
        ) : (
          <div className={css.registerButtonsContainer}>
            <button
              className={css.registerBtn}
              type="submit"
              disabled={isLoading}
            >
             {t('register')}
            </button>
            <GoogleBtn />
          </div>
        )}
      </form>
    </div>
  );
};

export default FormRegister;
