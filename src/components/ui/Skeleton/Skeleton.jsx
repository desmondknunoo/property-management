import styles from './Skeleton.module.css';

export function Skeleton({
    width,
    height,
    variant = 'text',
    className = '',
    style = {}
}) {
    const classes = [
        styles.skeleton,
        styles[variant],
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            className={classes}
            style={{ width, height, ...style }}
        />
    );
}

export function PropertyCardSkeleton() {
    return (
        <div className={styles.propertyCard}>
            <div className={`${styles.skeleton} ${styles.propertyImage}`} />
            <div className={styles.propertyContent}>
                <Skeleton width="30%" height="16px" />
                <Skeleton width="80%" height="24px" />
                <Skeleton width="60%" height="16px" />
                <Skeleton width="40%" height="20px" />
            </div>
        </div>
    );
}

export function ListSkeleton({ count = 3 }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <Skeleton key={i} width="100%" height="60px" style={{ marginBottom: '12px' }} />
            ))}
        </>
    );
}

export default Skeleton;
