import css from './ModalWindow.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

function ModalWindow({ onKeyDown, children }) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    window.addEventListener('click', onKeyDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('click', onKeyDown);
      body.style.overflow = 'auto';
    };
  }, [onKeyDown]);

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

export default ModalWindow;

ModalWindow.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
};
