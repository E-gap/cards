import css from './AnimationHome.module.css';

export const AnimationHome = () => {
  return (
    <>
      <div className={`${css.animation} ${css.animation30}`} />
      <div className={`${css.animation} ${css.animation60}`} />
      <div className={`${css.animation} ${css.animation90}`} />
    </>
  );
};
