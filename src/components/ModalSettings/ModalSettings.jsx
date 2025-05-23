import FormSettings from '../FormSettings/FormSettings';
import LangSwitch from '../LangSwitch/LangSwitch.jsx';
import { useTranslation } from 'react-i18next';

import sprite from '../../assets/sprite.svg';
import css from './ModalSettings.module.css';

const ModalSettings = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className={css.modalSettingContainer}>
      <div className={css.modalHeader}>
        <h2>{t('settings')}</h2>
        <LangSwitch />
        <button
          type="button"
          aria-label={'closeSettingModal'}
          className={css.closeBtn}
          onClick={onClose}
        >
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-x`}></use>
          </svg>
        </button>
      </div>
      <FormSettings handleClose={onClose} />
    </div>
  );
};

export default ModalSettings;
