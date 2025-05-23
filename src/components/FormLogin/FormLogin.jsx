import { useState } from 'react';
import { useCallback } from 'react';
import { useModal } from '../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { selectIsLoading } from '../../redux/auth/selectors.js';
import { useTranslation } from 'react-i18next';
import { login } from '../../redux/auth/operations.js';
import Loader from '../Loader/Loader.jsx';
import GoogleBtn from '../GoogleBtn/GoogleBtn.jsx';
import BtnForgotPassword from '../../components/BtnForgotPassword/BtnForgotPassword';

import sprite from '../../assets/sprite.svg';
import css from '../FormRegister/FormRegister.module.css';

const FormLogin = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);

  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const schemaValidation = Yup.object({
    email: Yup.string()
      .required(t('emailRequired'))
      .email(t('enterValidEmail')),
    password: Yup.string()
      .required(t('passwordRequired'))
      .min(7, t('passwordTooShort'))
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, t('passwordMatches')),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const onSubmitForm = (data) => {
    dispatch(login(data));
  };

  return (
    <div className={css.registerComponent}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <h2 className={css.registerTitle}>{t('logInTitle')}</h2>
        <div className={css.registerForm}>
          <label className={css.registerLabel}>
            {t('email')}
            <input
              className={
                errors.email?.message
                  ? `${css.registerInputError}`
                  : `${css.registerInput}`
              }
              {...register('email')}
              placeholder={t('placeholderEmail')}
            />
            {errors.email?.message ? (
              <p className={css.registerErrorMessage}>
                {errors.email?.message}
              </p>
            ) : (
              ''
            )}
          </label>

          <label className={css.registerLabel}>
            <span>{t('password')}</span>
            <span className={css.registerPassword}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={
                  errors.password?.message
                    ? `${css.registerInputError}`
                    : `${css.registerInput}`
                }
                {...register('password')}
                placeholder={t('placeholderPassword')}
              />
              <button
                className={css.passwordIconBtn}
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword === false ? (
                  <svg className={css.passwordIcon}>
                    <use xlinkHref={sprite + '#icon-eye-off'} />
                  </svg>
                ) : (
                  <svg className={css.passwordIcon}>
                    <use xlinkHref={sprite + '#icon-eye'} />
                  </svg>
                )}
              </button>
            </span>
            {errors.password?.message ? (
              <p className={css.registerErrorMessage}>
                {errors.password?.message}
              </p>
            ) : (
              ''
            )}
          </label>

          <BtnForgotPassword onClose={closeModal} />
        </div>
        {isLoading ? (
          <div className={css.registerButtonsContainer}>
            <Loader height={44} width={44} label="Увійти" />
          </div>
        ) : (
          <div className={css.registerButtonsContainer}>
            <button
              disabled={isLoading && true}
              className={css.registerBtn}
              type="submit"
            >
              {t('logIn')}
            </button>
            <GoogleBtn />
          </div>
        )}
      </form>
    </div>
  );
};

export default FormLogin;
