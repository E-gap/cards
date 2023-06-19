import css from './ModalWindow.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import FormSign from '../FormSign/FormSign';

const modalRoot = document.querySelector('#modal-root');

function ModalWindow({ onKeyDown }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <FormSign />
      </div>
    </div>,
    modalRoot
  );
}

export default ModalWindow;
