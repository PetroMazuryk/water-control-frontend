import { useTranslation } from 'react-i18next';

import css from './BtnDelete.module.css';

const BtnDelete = ({ isLoading, handleDelete }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={css.btnDelete}
      onClick={() => handleDelete()}
      disabled={isLoading}
    >
      {t('delete')}
    </button>
  );
};

export default BtnDelete;
