import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Landmark,
    TrendingUp,
    Shield,
    CreditCard,
    BarChart3,
    FileCheck,
    Users,
    ArrowRight
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import styles from './StaticPages.module.css';

const benefits = [
    { icon: <TrendingUp size={24} />, title: 'New Revenue Stream', desc: 'Earn from property financing commissions' },
    { icon: <Shield size={24} />, title: 'Pre-Verified Borrowers', desc: 'Access quality, pre-screened applicants' },
    { icon: <CreditCard size={24} />, title: 'Standing Orders', desc: 'Automated payment collection setup' },
    { icon: <BarChart3 size={24} />, title: 'Portfolio Dashboard', desc: 'Track all financed properties in one place' },
    { icon: <FileCheck size={24} />, title: 'Digital Documents', desc: 'Streamlined loan documentation' },
    { icon: <Users size={24} />, title: 'Qualified Leads', desc: 'Connect with motivated property buyers' }
];

export default function ForBanksPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Landmark size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Partner with PropGhana</h1>
                        <p className={styles.heroText}>
                            Expand your mortgage portfolio through Ghana's most trusted property platform
                        </p>
                        <div style={{ marginTop: 'var(--space-xl)' }}>
                            <Link to="/register?type=bank">
                                <Button variant="primary" size="lg">Become a Partner Bank</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Why Partner with Us?</h2>
                        <p>Access a new channel for property financing</p>
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
                        <h2>The Process</h2>
                        <p>Simple integration with your existing systems</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)', maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            { step: '1', title: 'Partner Agreement', desc: 'Sign partnership terms and integrate with our platform' },
                            { step: '2', title: 'Receive Applications', desc: 'Get pre-qualified financing applications from buyers' },
                            { step: '3', title: 'Process & Disburse', desc: 'Complete your standard approval and fund the property' },
                            { step: '4', title: 'Collect & Track', desc: 'Use our dashboard to monitor payments and performance' }
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
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.25rem',
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
                    <h2>Ready to Expand Your Mortgage Portfolio?</h2>
                    <p>Contact our partnerships team to get started</p>
                    <div className={styles.ctaButtons}>
                        <Link to="/contact">
                            <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                                Contact Partnerships
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
