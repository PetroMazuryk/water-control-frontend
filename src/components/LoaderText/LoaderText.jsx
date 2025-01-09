import css from './LoaderText.module.css';

const LoaderText = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.title}>
        <div className={css.mask}>WaterControl</div>
      </div>
    </div>
  );
};

export default LoaderText;
