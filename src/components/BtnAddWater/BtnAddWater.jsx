import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { parseDateTime } from '../../helpers/parseDate';
import WaterModal from '../WaterModal/WaterModal';
import { useTranslation } from 'react-i18next';
import sprite from '../../assets/sprite.svg';

import css from './BtnAddWater.module.css';

const BtnAddWater = () => {
  const { t } = useTranslation();
  const setModal = useModal();

  const { date: dateUrl } = useParams();
  const timestampFromUrl = parseDateTime(dateUrl);

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(
      <WaterModal
        onClose={closeModal}
        operationType={'add'}
        timestampFromUrl={timestampFromUrl}
      />
    );
  }, [setModal, closeModal, timestampFromUrl]);

  return (
    <button type="button" className={`${css.btnAdd} third-step`} onClick={openModal}>
      <svg className={css.plus}>
        <use xlinkHref={`${sprite}#icon-plus`} />
      </svg>
      <h2 className={css.btnText}>{t('addWater')}</h2>
    </button>
  );
};

export default BtnAddWater;
