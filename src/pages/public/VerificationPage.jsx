import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Shield,
    FileCheck,
    Clock,
    CheckCircle,
    Upload,
    Search,
    UserCheck,
    Building2
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import styles from './StaticPages.module.css';

const steps = [
    {
        icon: <Upload size={28} />,
        title: 'Submit Documents',
        description: 'Upload property deed, site plan, and Ghana Lands Commission registration documents.'
    },
    {
        icon: <Search size={28} />,
        title: 'Lands Commission Check',
        description: 'We verify the property with Ghana Lands Commission to ensure clear title and no disputes.'
    },
    {
        icon: <UserCheck size={28} />,
        title: 'Owner Verification',
        description: 'We confirm the identity of the property owner using Ghana Card and supporting documents.'
    },
    {
        icon: <CheckCircle size={28} />,
        title: 'Verification Complete',
        description: 'Once verified, your property receives our Verified badge and can be listed on PropGhana.'
    }
];

export default function VerificationPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Shield size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Property Verification Process</h1>
                        <p className={styles.heroText}>
                            How we ensure every property on PropGhana is legitimate and dispute-free
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our 4-Step Verification Process</h2>
                        <p>Every property goes through rigorous checks before being listed</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card padding="lg" style={{ height: '100%' }}>
                                    <CardBody>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: 'var(--color-primary)',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.875rem',
                                                fontWeight: '600'
                                            }}>
                                                {i + 1}
                                            </div>
                                            <div style={{ color: 'var(--color-primary)' }}>{step.icon}</div>
                                        </div>
                                        <h3 style={{ marginBottom: 'var(--space-sm)' }}>{step.title}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{step.description}</p>
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
                        <h2>Documents Required</h2>
                        <p>Have these ready to speed up your verification</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
                        <Card padding="md">
                            <CardBody>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                                    <FileCheck size={20} color="var(--color-primary)" />
                                    <strong>Property Documents</strong>
                                </div>
                                <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: 'var(--space-lg)', lineHeight: 1.8 }}>
                                    <li>Indenture / Property Deed</li>
                                    <li>Site Plan</li>
                                    <li>Lands Commission Registration</li>
                                    <li>Recent Property Tax Receipts</li>
                                </ul>
                            </CardBody>
                        </Card>

                        <Card padding="md">
                            <CardBody>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                                    <UserCheck size={20} color="var(--color-primary)" />
                                    <strong>Owner Identification</strong>
                                </div>
                                <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: 'var(--space-lg)', lineHeight: 1.8 }}>
                                    <li>Ghana Card (National ID)</li>
                                    <li>Passport Photo</li>
                                    <li>Proof of Address</li>
                                    <li>Tax Identification Number (TIN)</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                            <Clock size={20} color="var(--color-text-muted)" />
                            <span style={{ color: 'var(--color-text-secondary)' }}>Average verification time: 3-5 business days</span>
                        </div>
                        <Link to="/register?type=owner">
                            <Button variant="primary" size="lg">Start Verification</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
