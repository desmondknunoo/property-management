import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Building2,
    BarChart3,
    Users,
    CreditCard,
    CheckCircle,
    Shield,
    Wrench,
    FileText,
    ArrowRight
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import styles from './StaticPages.module.css';

const benefits = [
    { icon: <Shield size={24} />, title: 'Verified Badge', desc: 'Stand out with our trusted verification stamp' },
    { icon: <Users size={24} />, title: 'Quality Tenants', desc: 'Access pre-screened, qualified tenants' },
    { icon: <CreditCard size={24} />, title: 'Guaranteed Payments', desc: 'Receive payments via standing orders' },
    { icon: <BarChart3 size={24} />, title: 'Full Dashboard', desc: 'Complete property management system' },
    { icon: <Wrench size={24} />, title: 'Maintenance Tracking', desc: 'Handle requests professionally' },
    { icon: <FileText size={24} />, title: 'Digital Leases', desc: 'Create and manage leases online' }
];

export default function ForOwnersPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Building2 size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>For Property Owners</h1>
                        <p className={styles.heroText}>
                            List your property on Ghana's most trusted marketplace and access
                            our complete property management system
                        </p>
                        <div style={{ marginTop: 'var(--space-xl)' }}>
                            <Link to="/register?type=owner">
                                <Button variant="primary" size="lg">List Your Property</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Why Choose PropGhana?</h2>
                        <p>Everything you need to manage your properties professionally</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Card padding="md" style={{ height: '100%' }}>
                                    <CardBody>
                                        <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
                                            {benefit.icon}
                                        </div>
                                        <h3 style={{ marginBottom: 'var(--space-xs)', fontSize: '1rem' }}>{benefit.title}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{benefit.desc}</p>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>How It Works</h2>
                        <p>Get started in three simple steps</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)', maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            { step: '1', title: 'Register & Verify', desc: 'Create your owner account and submit verification documents' },
                            { step: '2', title: 'List Properties', desc: 'Add your properties with photos, details, and pricing' },
                            { step: '3', title: 'Manage & Earn', desc: 'Use our dashboard to manage tenants and collect payments' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    margin: '0 auto var(--space-md)'
                                }}>
                                    {item.step}
                                </div>
                                <h3 style={{ marginBottom: 'var(--space-sm)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to Get Started?</h2>
                    <p>Join hundreds of property owners already on PropGhana</p>
                    <div className={styles.ctaButtons}>
                        <Link to="/register?type=owner">
                            <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                                Register as Owner
                            </Button>
                        </Link>
                        <Link to="/verification">
                            <Button variant="outline" size="lg">Learn About Verification</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
