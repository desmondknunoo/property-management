import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    HelpCircle,
    Search,
    MessageCircle,
    Phone,
    Mail,
    FileText,
    CreditCard,
    Shield,
    Home,
    Users
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import styles from './StaticPages.module.css';

const helpCategories = [
    { icon: <Home size={24} />, title: 'Finding a Property', link: '/faq', description: 'Search tips, filters, and saving favorites' },
    { icon: <CreditCard size={24} />, title: 'Payments & Financing', link: '/payment-plans', description: 'Payment plans, down payments, and installments' },
    { icon: <Shield size={24} />, title: 'Verification', link: '/verification', description: 'Property and owner verification process' },
    { icon: <FileText size={24} />, title: 'Documents', link: '/faq', description: 'Required documents and submissions' },
    { icon: <Users size={24} />, title: 'For Property Owners', link: '/for-owners', description: 'Listing, managing, and tenant relations' },
    { icon: <MessageCircle size={24} />, title: 'Account & Profile', link: '/faq', description: 'Settings, notifications, and security' }
];

export default function HelpCenterPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <HelpCircle size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Help Center</h1>
                        <p className={styles.heroText}>
                            How can we help you today?
                        </p>

                        <div className={styles.searchBox} style={{ maxWidth: '500px', margin: 'var(--space-xl) auto 0' }}>
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search for help..."
                                style={{
                                    flex: 1,
                                    border: 'none',
                                    background: 'transparent',
                                    padding: 'var(--space-md)',
                                    fontSize: '1rem',
                                    color: 'var(--color-text-primary)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Browse by Topic</h2>
                        <p>Select a category to find answers</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
                        {helpCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link to={cat.link} style={{ textDecoration: 'none' }}>
                                    <Card hoverable padding="md" style={{ height: '100%' }}>
                                        <CardBody>
                                            <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
                                                {cat.icon}
                                            </div>
                                            <h3 style={{ marginBottom: 'var(--space-xs)' }}>{cat.title}</h3>
                                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{cat.description}</p>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Still Need Help?</h2>
                        <p>Our support team is here for you</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)', maxWidth: '800px', margin: '0 auto' }}>
                        <Card padding="lg">
                            <CardBody style={{ textAlign: 'center' }}>
                                <MessageCircle size={32} color="var(--color-primary)" style={{ marginBottom: 'var(--space-md)' }} />
                                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Live Chat</h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>Chat with our support team</p>
                                <Button variant="primary" fullWidth>Start Chat</Button>
                            </CardBody>
                        </Card>

                        <Card padding="lg">
                            <CardBody style={{ textAlign: 'center' }}>
                                <Phone size={32} color="var(--color-primary)" style={{ marginBottom: 'var(--space-md)' }} />
                                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Call Us</h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>+233 30 123 4567</p>
                                <Button variant="outline" fullWidth>Call Now</Button>
                            </CardBody>
                        </Card>

                        <Card padding="lg">
                            <CardBody style={{ textAlign: 'center' }}>
                                <Mail size={32} color="var(--color-primary)" style={{ marginBottom: 'var(--space-md)' }} />
                                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Email</h3>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>support@propghana.com</p>
                                <Link to="/contact">
                                    <Button variant="outline" fullWidth>Send Email</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
