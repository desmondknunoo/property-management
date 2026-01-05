import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({
    label,
    type = 'text',
    placeholder,
    error,
    helperText,
    required = false,
    disabled = false,
    leftIcon,
    rightIcon,
    className = '',
    ...props
}, ref) => {
    const inputClasses = [
        styles.input,
        leftIcon && styles.hasLeftIcon,
        rightIcon && styles.hasRightIcon,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={`${styles.inputWrapper} ${error ? styles.error : ''}`}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <div className={styles.inputContainer}>
                {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
                <input
                    ref={ref}
                    type={type}
                    className={inputClasses}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...props}
                />
                {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
            </div>
            {error && <span className={styles.errorText}>{error}</span>}
            {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
        </div>
    );
});

Input.displayName = 'Input';

export const Textarea = forwardRef(({
    label,
    placeholder,
    error,
    helperText,
    required = false,
    disabled = false,
    rows = 4,
    className = '',
    ...props
}, ref) => {
    return (
        <div className={`${styles.inputWrapper} ${error ? styles.error : ''}`}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <textarea
                ref={ref}
                className={`${styles.input} ${styles.textarea} ${className}`}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                {...props}
            />
            {error && <span className={styles.errorText}>{error}</span>}
            {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export const Select = forwardRef(({
    label,
    error,
    helperText,
    required = false,
    disabled = false,
    children,
    className = '',
    ...props
}, ref) => {
    return (
        <div className={`${styles.inputWrapper} ${error ? styles.error : ''}`}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <select
                ref={ref}
                className={`${styles.input} ${styles.select} ${className}`}
                disabled={disabled}
                {...props}
            >
                {children}
            </select>
            {error && <span className={styles.errorText}>{error}</span>}
            {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
        </div>
    );
});

Select.displayName = 'Select';

export default Input;
