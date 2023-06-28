import css from './ModalWindow.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ setIsModalWindowOpen, children }) => {
  useEffect(() => {
    const closeModal = e => {
      if (e.target.getAttribute('class')?.includes('backdrop')) {
        setIsModalWindowOpen(false);
      }
      if (e.code === 'Escape') {
        setIsModalWindowOpen(false);
      }
    };

    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    window.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
      window.removeEventListener('click', closeModal);
      body.style.overflow = 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsModalWindowOpen]);

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <AiOutlineCloseCircle
          className={css.closeModalIcon}
          onClick={() => {
            setIsModalWindowOpen(false);
          }}
        />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

ModalWindow.propTypes = {
  setIsModalWindowOpen: PropTypes.func.isRequired,
};
