import styles from './Badge.module.css';

export function Badge({
    children,
    variant = 'primary',
    size = 'md',
    dot = false,
    icon,
    className = ''
}) {
    const classes = [
        styles.badge,
        styles[variant],
        styles[size],
        className
    ].filter(Boolean).join(' ');

    return (
        <span className={classes}>
            {dot && <span className={styles.dot} />}
            {icon}
            {children}
        </span>
    );
}

export default Badge;
