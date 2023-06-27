import css from './ModalWindow.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ setIsModalWindowOpen, children }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.target.getAttribute('class')?.includes('backdrop')) {
        setIsModalWindowOpen(false);
      }
    };

    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    window.addEventListener('click', onKeyDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('click', onKeyDown);
      body.style.overflow = 'auto';
    };
  }, [setIsModalWindowOpen]);

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  setIsModalWindowOpen: PropTypes.func.isRequired,
};
