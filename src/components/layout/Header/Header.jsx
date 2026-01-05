import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    Home,
    Building2,
    Heart,
    Bell,
    Search,
    GraduationCap
} from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle';
import Button from '../../ui/Button/Button';
import styles from './Header.module.css';

const publicNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/properties?type=buy', label: 'Buy' },
    { to: '/properties?type=rent', label: 'Rent' },
    { to: '/hostels', label: 'Hostels' },
    { to: '/about', label: 'About' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isAuthenticated, user, logout } = useAuth();
    const location = useLocation();

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <button
                        className={styles.mobileMenu}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link to="/" className={styles.logo}>
                        <span className={styles.logoIcon}>
                            <Building2 size={20} />
                        </span>
                        PropGhana
                    </Link>

                    <nav className={styles.nav}>
                        {publicNavLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className={styles.rightSection}>
                    <ThemeToggle />

                    {isAuthenticated ? (
                        <>
                            <button className={styles.iconButton} aria-label="Search">
                                <Search size={20} />
                            </button>
                            <button className={styles.iconButton} aria-label="Favorites">
                                <Heart size={20} />
                            </button>
                            <button className={styles.iconButton} aria-label="Notifications">
                                <Bell size={20} />
                                <span className={styles.notificationDot} />
                            </button>
                            <button className={styles.userMenu}>
                                <div className={styles.avatar}>
                                    {user?.avatar ? (
                                        <img src={user.avatar} alt={user.name} className={styles.avatarImg} />
                                    ) : (
                                        getInitials(user?.name || 'U')
                                    )}
                                </div>
                            </button>
                        </>
                    ) : (
                        <div className={styles.authButtons}>
                            <Link to="/login">
                                <Button variant="ghost">Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="primary">Get Started</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
                {publicNavLinks.map(link => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                        }
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.label === 'Home' && <Home size={20} />}
                        {link.label === 'Buy' && <Building2 size={20} />}
                        {link.label === 'Rent' && <Building2 size={20} />}
                        {link.label === 'Hostels' && <GraduationCap size={20} />}
                        {link.label}
                    </NavLink>
                ))}
                {!isAuthenticated && (
                    <>
                        <Link
                            to="/login"
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
