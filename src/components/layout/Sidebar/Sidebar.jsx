import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Building2,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import styles from './Sidebar.module.css';

export function Sidebar({
    navItems = [],
    isOpen = true,
    onClose,
    collapsed = false,
    onToggleCollapse
}) {
    const { user, logout } = useAuth();

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const getUserRole = (type) => {
        switch (type) {
            case 'owner': return 'Property Owner';
            case 'bank': return 'Bank Admin';
            case 'student': return 'Student';
            default: return 'Customer';
        }
    };

    return (
        <>
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}
            <aside
                className={`
          ${styles.sidebar} 
          ${isOpen ? styles.sidebarOpen : ''} 
          ${collapsed ? styles.collapsed : ''}
        `}
            >
                <div className={styles.header}>
                    <Link to="/" className={styles.logo}>
                        <span className={styles.logoIcon}>
                            <Building2 size={20} />
                        </span>
                        <span className={styles.logoText}>PropGhana</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    {navItems.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={styles.navSection}>
                            {section.title && (
                                <h3 className={styles.navSectionTitle}>{section.title}</h3>
                            )}
                            {section.items.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                    }
                                    onClick={onClose}
                                >
                                    <span className={styles.navIcon}>{item.icon}</span>
                                    <span className={styles.navLabel}>{item.label}</span>
                                    {item.badge && (
                                        <span className={styles.navBadge}>{item.badge}</span>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>

                <div className={styles.footer}>
                    <div className={styles.userCard}>
                        <div className={styles.userAvatar}>
                            {getInitials(user?.name || 'User')}
                        </div>
                        <div className={styles.userInfo}>
                            <div className={styles.userName}>{user?.name || 'User'}</div>
                            <div className={styles.userRole}>{getUserRole(user?.type)}</div>
                        </div>
                    </div>

                    {onToggleCollapse && (
                        <button
                            className={styles.collapseButton}
                            onClick={onToggleCollapse}
                            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        >
                            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                        </button>
                    )}
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
