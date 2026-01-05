import styles from './Card.module.css';

export function Card({
    children,
    variant = 'elevated',
    padding = 'none',
    hoverable = false,
    clickable = false,
    className = '',
    onClick,
    ...props
}) {
    const classes = [
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        hoverable && styles.hoverable,
        clickable && styles.clickable,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} onClick={onClick} {...props}>
            {children}
        </div>
    );
}

export function CardHeader({ title, subtitle, action, className = '' }) {
    return (
        <div className={`${styles.header} ${className}`}>
            <div>
                <h3 className={styles.title}>{title}</h3>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
}

export function CardBody({ children, className = '' }) {
    return (
        <div className={`${styles.body} ${className}`}>
            {children}
        </div>
    );
}

export function CardFooter({ children, className = '' }) {
    return (
        <div className={`${styles.footer} ${className}`}>
            {children}
        </div>
    );
}

export function CardImage({ src, alt, badges, favoriteButton, className = '' }) {
    return (
        <div className={`${styles.imageWrapper} ${className}`}>
            <img src={src} alt={alt} className={styles.image} />
            {badges && <div className={styles.imageBadges}>{badges}</div>}
            {favoriteButton && <div className={styles.imageFavorite}>{favoriteButton}</div>}
        </div>
    );
}

export default Card;
