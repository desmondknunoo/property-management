import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

export function Modal({
    isOpen,
    onClose,
    title,
    size = 'md',
    children,
    footer,
    closeOnOverlay = true,
    closeOnEsc = true,
    showCloseButton = true
}) {
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape' && closeOnEsc) {
            onClose();
        }
    }, [onClose, closeOnEsc]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && closeOnOverlay) {
            onClose();
        }
    };

    return createPortal(
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={`${styles.modal} ${styles[size]}`} role="dialog" aria-modal="true">
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    {showCloseButton && (
                        <button
                            className={styles.closeButton}
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>
                <div className={styles.body}>
                    {children}
                </div>
                {footer && (
                    <div className={styles.footer}>
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}

export default Modal;
