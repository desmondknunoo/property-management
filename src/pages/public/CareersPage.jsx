import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Briefcase,
    MapPin,
    Heart,
    Rocket,
    Users,
    Coffee,
    Send
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import styles from './StaticPages.module.css';

const jobs = [
    { title: 'Senior Frontend Developer', location: 'Accra', type: 'Full-time', dept: 'Engineering' },
    { title: 'Product Designer', location: 'Accra', type: 'Full-time', dept: 'Design' },
    { title: 'Customer Success Manager', location: 'Accra / Remote', type: 'Full-time', dept: 'Operations' },
    { title: 'Marketing Manager', location: 'Accra', type: 'Full-time', dept: 'Marketing' },
    { title: 'Property Verification Specialist', location: 'Kumasi', type: 'Full-time', dept: 'Operations' },
    { title: 'Mobile Developer (React Native)', location: 'Remote', type: 'Contract', dept: 'Engineering' }
];

const perks = [
    { icon: <Heart size={24} />, title: 'Health Insurance', desc: 'Comprehensive coverage for you and family' },
    { icon: <Rocket size={24} />, title: 'Growth Budget', desc: 'Annual learning and development fund' },
    { icon: <Coffee size={24} />, title: 'Flexible Work', desc: 'Hybrid work options available' },
    { icon: <Users size={24} />, title: 'Great Team', desc: 'Work with passionate people' }
];

export default function CareersPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Briefcase size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>Join Our Team</h1>
                        <p className={styles.heroText}>
                            Help us revolutionize the property market in Ghana
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Why Work at PropGhana?</h2>
                        <p>We're building something meaningful for Ghana</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-lg)' }}>
                        {perks.map((perk, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Card padding="md" style={{ textAlign: 'center' }}>
                                    <CardBody>
                                        <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                                            {perk.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-xs)' }}>{perk.title}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{perk.desc}</p>
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
                        <h2>Open Positions</h2>
                        <p>Find your next opportunity</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '800px', margin: '0 auto' }}>
                        {jobs.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Card hoverable padding="md">
                                    <CardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                                        <div>
                                            <h3 style={{ marginBottom: 'var(--space-xs)' }}>{job.title}</h3>
                                            <div style={{ display: 'flex', gap: 'var(--space-md)', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <MapPin size={14} /> {job.location}
                                                </span>
                                                <span>{job.dept}</span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                            <Badge variant={job.type === 'Full-time' ? 'primary' : 'secondary'}>{job.type}</Badge>
                                            <Button variant="outline" size="sm" rightIcon={<Send size={14} />}>Apply</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)', color: 'var(--color-text-secondary)' }}>
                        <p>Don't see a role that fits? Send your CV to <a href="mailto:careers@propghana.com" style={{ color: 'var(--color-primary)' }}>careers@propghana.com</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
