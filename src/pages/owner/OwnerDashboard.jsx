import { useState } from 'react';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar';
import { VerificationWorkflow } from '../../components/verification/VerificationWorkflow';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import {
    Building2,
    BarChart3,
    Settings,
    Search,
    Bell,
    User,
    Menu,
    Shield,
    Plus
} from 'lucide-react';
import styles from './OwnerDashboard.module.css';

const navItems = [
    { label: 'Overview', to: '/dashboard/owner', icon: <BarChart3 size={20} /> },
    { label: 'My Properties', to: '/dashboard/owner/properties', icon: <Building2 size={20} /> },
    { label: 'Verification', to: '/dashboard/owner/verification', icon: <Shield size={20} /> },
    { label: 'Settings', to: '/dashboard/owner/settings', icon: <Settings size={20} /> },
];

export default function OwnerDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [verificationComplete, setVerificationComplete] = useState(false);

    return (
        <div className={styles.dashboard}>
            <Sidebar
                items={navItems}
                isOpen={sidebarOpen}
                onToggle={() => setSidebarOpen(!sidebarOpen)}
                user={{ name: 'Kwame Osei', role: 'Property Owner' }}
            />

            <main className={`${styles.main} ${!sidebarOpen ? styles.expanded : ''}`}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <button
                            className={styles.menuBtn}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu size={24} />
                        </button>
                        <h2>Overview</h2>
                    </div>
                    <div className={styles.headerRight}>
                        <button className={styles.iconBtn}><Search size={20} /></button>
                        <button className={styles.iconBtn}>
                            <Bell size={20} />
                            <span className={styles.badge} />
                        </button>
                        <div className={styles.profile}>
                            <div className={styles.avatar}>KO</div>
                        </div>
                    </div>
                </header>

                <div className={styles.content}>
                    <div style={{ marginBottom: 'var(--space-xl)' }}>
                        <h1>Welcome back, Kwame</h1>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Here's what's happening with your properties today.</p>
                    </div>

                    {!verificationComplete ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={styles.verificationSection}
                        >
                            <div className={styles.sectionHeader}>
                                <h3>Complete Your Verification</h3>
                                <Badge variant="warning">Action Required</Badge>
                            </div>
                            <p style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-text-secondary)' }}>
                                To list properties on PropGhana, you need to verify your identity and ownership documents.
                            </p>

                            <VerificationWorkflow
                                userType="owner"
                                onComplete={() => setVerificationComplete(true)}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={styles.emptyState}
                        >
                            <Building2 size={64} style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }} />
                            <h3>No Properties Listed Yet</h3>
                            <p>You're all verified! Start listing your properties to reach thousands of potential tenants.</p>
                            <Button variant="primary" size="lg" leftIcon={<Plus size={20} />}>
                                Add New Property
                            </Button>
                        </motion.div>
                    )}
                </div>
            </main>
        </div>
    );
}
