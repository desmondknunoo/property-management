import { motion } from 'framer-motion';
import {
    Shield,
    CreditCard,
    MapPin,
    Users,
    Building2,
    CheckCircle,
    Award,
    Target,
    Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import styles from './StaticPages.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={fadeInUp}>
                            Ghana's Most Trusted<br />
                            <span className={styles.highlight}>Property Marketplace</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className={styles.heroText}>
                            We're revolutionizing real estate in Ghana by ensuring every property
                            is verified, every owner is legitimate, and every transaction is transparent.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.missionGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className={styles.missionItem}>
                            <Target size={32} />
                            <h3>Our Mission</h3>
                            <p>To eliminate property fraud and disputes in Ghana by creating
                                a marketplace where only verified, legitimate properties are listed.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className={styles.missionItem}>
                            <Heart size={32} />
                            <h3>Our Vision</h3>
                            <p>A Ghana where everyone can find their dream property with confidence,
                                supported by flexible payment options that make ownership accessible.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className={styles.missionItem}>
                            <Award size={32} />
                            <h3>Our Values</h3>
                            <p>Transparency, trust, and technology. We believe in using innovation
                                to solve real problems in Ghana's property market.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className={styles.sectionAlt}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>What Makes Us Different</h2>
                        <p>We've built PropGhana to solve the real problems in Ghana's property market</p>
                    </motion.div>

                    <motion.div
                        className={styles.featuresGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <Card padding="lg" className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <Shield size={28} />
                                </div>
                                <h3>100% Verified Properties</h3>
                                <p>Every property goes through our rigorous verification process including
                                    Ghana Lands Commission checks, document validation, and ownership confirmation.</p>
                                <ul className={styles.featureList}>
                                    <li><CheckCircle size={16} /> Lands Commission verification</li>
                                    <li><CheckCircle size={16} /> Document authenticity checks</li>
                                    <li><CheckCircle size={16} /> No disputes or litigation</li>
                                    <li><CheckCircle size={16} /> Owner identity verification</li>
                                </ul>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <Card padding="lg" className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <CreditCard size={28} />
                                </div>
                                <h3>Flexible Payment Plans</h3>
                                <p>We partner with banks and property owners to offer installment payment
                                    options, making property ownership more accessible to Ghanaians.</p>
                                <ul className={styles.featureList}>
                                    <li><CheckCircle size={16} /> Bank-financed options</li>
                                    <li><CheckCircle size={16} /> Owner-financed installments</li>
                                    <li><CheckCircle size={16} /> Standing order arrangements</li>
                                    <li><CheckCircle size={16} /> Up to 60 months duration</li>
                                </ul>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <Card padding="lg" className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <MapPin size={28} />
                                </div>
                                <h3>GPS & Location Services</h3>
                                <p>Find properties easily with our integrated location services and
                                    get directions through your favorite ride-hailing apps.</p>
                                <ul className={styles.featureList}>
                                    <li><CheckCircle size={16} /> Interactive maps</li>
                                    <li><CheckCircle size={16} /> Uber & Bolt integration</li>
                                    <li><CheckCircle size={16} /> Neighborhood insights</li>
                                    <li><CheckCircle size={16} /> Distance calculations</li>
                                </ul>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <Card padding="lg" className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <Users size={28} />
                                </div>
                                <h3>Multi-User Platform</h3>
                                <p>Separate dashboards for property owners, customers, banks, and students
                                    to manage all their property-related activities in one place.</p>
                                <ul className={styles.featureList}>
                                    <li><CheckCircle size={16} /> Property owner dashboard</li>
                                    <li><CheckCircle size={16} /> Customer portal</li>
                                    <li><CheckCircle size={16} /> Bank financing dashboard</li>
                                    <li><CheckCircle size={16} /> Student hostel features</li>
                                </ul>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.statsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { value: '500+', label: 'Verified Properties' },
                            { value: '1,200+', label: 'Happy Customers' },
                            { value: '95%', label: 'Verification Rate' },
                            { value: '16', label: 'Regions Covered' }
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeInUp} className={styles.statItem}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to Find Your Perfect Property?</h2>
                    <p>Browse verified listings or list your property on Ghana's most trusted platform.</p>
                    <div className={styles.ctaButtons}>
                        <Link to="/properties">
                            <Button variant="primary" size="lg">Browse Properties</Button>
                        </Link>
                        <Link to="/register?type=owner">
                            <Button variant="outline" size="lg">List Your Property</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
