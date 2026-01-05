import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className = '',
    ...props
}, ref) => {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        isLoading && styles.loading,
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            ref={ref}
            className={classes}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <span className={styles.spinner} />}
            {leftIcon && !isLoading && leftIcon}
            {children}
            {rightIcon && !isLoading && rightIcon}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
