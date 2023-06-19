import css from './ModalWindow.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import FormSign from '../FormSign/FormSign';

const modalRoot = document.querySelector('#modal-root');

function ModalWindow({ onKeyDown, sign }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <FormSign sign={sign} />
      </div>
    </div>,
    modalRoot
  );
}

export default ModalWindow;

ModalWindow.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  sign: PropTypes.string,
};
