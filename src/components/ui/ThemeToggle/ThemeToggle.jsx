import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export function ThemeToggle({ className = '' }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={`${styles.toggle} ${className}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <Moon size={20} className={styles.icon} />
            ) : (
                <Sun size={20} className={styles.icon} />
            )}
        </button>
    );
}

export default ThemeToggle;
