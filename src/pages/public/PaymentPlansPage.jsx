import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    CreditCard,
    Percent,
    Calendar,
    CheckCircle,
    Building2,
    Landmark,
    Calculator
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import styles from './StaticPages.module.css';

const plans = [
    {
        title: 'Bank Financing',
        icon: <Landmark size={32} />,
        badge: 'Lowest Rates',
        description: 'Partner with leading Ghanaian banks for competitive mortgage rates.',
        features: [
            'Interest rates from 18% p.a.',
            'Up to 60 months duration',
            'Minimum 20% down payment',
            'Fixed monthly installments',
            'Standing order option'
        ],
        requirements: [
            'Salaried employment',
            'Bank statements (6 months)',
            'Employment letter',
            'Ghana Card'
        ]
    },
    {
        title: 'Owner Financing',
        icon: <Building2 size={32} />,
        badge: 'Flexible',
        description: 'Direct payment arrangements with property owners.',
        features: [
            'Negotiable interest rates',
            'Up to 36 months duration',
            'Minimum 30% down payment',
            'Flexible payment schedule',
            'Direct owner communication'
        ],
        requirements: [
            'Verifiable income',
            'Guarantor (optional)',
            'Income proof',
            'Valid ID'
        ]
    },
    {
        title: 'Student Plan',
        icon: <CreditCard size={32} />,
        badge: 'For Students',
        description: 'Hostel payment plans with parent guarantor support.',
        features: [
            'Semester-based payments',
            'Parent guarantor system',
            'Standing order setup',
            'Hostel-specific terms',
            'Quick approval'
        ],
        requirements: [
            'Student ID',
            'Parent guarantor',
            'University admission letter',
            'Parent income proof'
        ]
    }
];

export default function PaymentPlansPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <CreditCard size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Flexible Payment Plans</h1>
                        <p className={styles.heroText}>
                            Own or rent your dream property with payment options that fit your budget
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card padding="lg" style={{ height: '100%' }}>
                                    <CardBody>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-lg)' }}>
                                            <div style={{ color: 'var(--color-primary)' }}>{plan.icon}</div>
                                            <Badge variant="primary">{plan.badge}</Badge>
                                        </div>

                                        <h3 style={{ marginBottom: 'var(--space-sm)' }}>{plan.title}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>{plan.description}</p>

                                        <div style={{ marginBottom: 'var(--space-lg)' }}>
                                            <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>Features</h4>
                                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                                                {plan.features.map((feature, j) => (
                                                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                                                        <CheckCircle size={16} color="var(--color-primary)" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
                                            <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>Requirements</h4>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                                                {plan.requirements.map((req, j) => (
                                                    <span key={j} style={{
                                                        padding: '4px 8px',
                                                        background: 'var(--color-bg-tertiary)',
                                                        borderRadius: 'var(--radius-sm)',
                                                        fontSize: '0.75rem',
                                                        color: 'var(--color-text-secondary)'
                                                    }}>
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-3xl)' }}>
                        <Link to="/properties">
                            <Button variant="primary" size="lg" leftIcon={<Calculator size={18} />}>
                                Browse Properties with Flexible Payment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
