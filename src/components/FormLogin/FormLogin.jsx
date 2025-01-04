import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import sprite from '../../assets/sprite.svg';

import css from '../FormRegister/FormRegister.module.css';

const FormLogin = () => {
  const isLoading = false;
  const [showPassword, setShowPassword] = useState(false);

  const schemaValidation = Yup.object({
    email: Yup.string()
      .required('Потрібна електронна адреса')
      .email('Недійсна адреса електронної пошти'),
    password: Yup.string()
      .required('Потрібен пароль')
      .min(7, 'Пароль має містити принаймні 7 символів')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Пароль повинен містити принаймні одну літеру та одну цифру'
      ),
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
    console.log(data);
  };
  return (
    <div className={css.registerComponent}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <h2 className={css.registerTitle}>Вхід</h2>
        <div className={css.registerForm}>
          <label className={css.registerLabel}>
            Електронна пошта
            <input
              className={
                errors.email?.message
                  ? `${css.registerInputError}`
                  : `${css.registerInput}`
              }
              {...register('email')}
              placeholder="Введіть свою пошту"
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
            <span>Пароль</span>
            <span className={css.registerPassword}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={
                  errors.password?.message
                    ? `${css.registerInputError}`
                    : `${css.registerInput}`
                }
                {...register('password')}
                placeholder="Введіть свій пароль"
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
        </div>
        {isLoading ? (
          <div className={css.registerLoader}>
            <div height={44} width={44}>
              Loading ...
            </div>
            .
          </div>
        ) : (
          <div className={css.registerButtonsContainer}>
            <button
              disabled={isLoading && true}
              className={css.registerBtn}
              type="submit"
            >
              Увійти
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormLogin;
