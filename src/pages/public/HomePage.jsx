import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Shield,
    CreditCard,
    MapPin,
    Building2,
    Home,
    Warehouse,
    GraduationCap,
    ArrowRight,
    CheckCircle,
    Star,
    ChevronDown
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import { properties } from '../../data/properties';
import { formatCurrency } from '../../utils/helpers';
import styles from './HomePage.module.css';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const cardHoverVariants = {
    rest: { y: 0 },
    hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } }
};

const iconHoverVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
};

export default function HomePage() {
    const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 3);

    // Floating particles state (generated client-side to avoid hydration errors)
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            size: Math.random() * 6 + 2,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 8 + 4,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.4 + 0.1,
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <div className={styles.page}>
            {/* Animated Gradient Background Styles */}
            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animateGradientBg {
                    background: linear-gradient(
                        135deg,
                        var(--color-bg-primary) 0%,
                        var(--color-bg-secondary) 25%,
                        var(--color-primary-light) 50%,
                        var(--color-bg-secondary) 75%,
                        var(--color-bg-primary) 100%
                    );
                    background-size: 400% 400%;
                    animation: gradientShift 8s ease infinite;
                }
                [data-theme="dark"] .animateGradientBg {
                    background: linear-gradient(
                        135deg,
                        var(--color-bg-primary) 0%,
                        var(--color-bg-secondary) 25%,
                        rgba(22, 163, 74, 0.15) 50%,
                        var(--color-bg-secondary) 75%,
                        var(--color-bg-primary) 100%
                    );
                    background-size: 400% 400%;
                    animation: gradientShift 8s ease infinite;
                }
            `}</style>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={`${styles.heroGradient} animateGradientBg`} />

                    {/* Floating Particles */}
                    <div className={styles.heroShapes}>
                        {particles.map((particle) => (
                            <motion.div
                                key={particle.id}
                                initial={{ opacity: particle.opacity, scale: 0.5 }}
                                animate={{
                                    opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.3],
                                    scale: [0.5, 1, 0.5],
                                    y: [0, -100, 0]
                                }}
                                transition={{
                                    duration: particle.duration * 0.5,
                                    delay: particle.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className={styles.particle}
                                style={{
                                    position: 'absolute',
                                    width: `${particle.size}px`,
                                    height: `${particle.size}px`,
                                    top: `${particle.top}%`,
                                    left: `${particle.left}%`,
                                    borderRadius: '50%',
                                    background: particle.size > 4
                                        ? 'var(--color-primary-light)'
                                        : 'var(--color-text-muted)',
                                    opacity: particle.opacity,
                                    pointerEvents: 'none',
                                }}
                            />
                        ))}

                        {/* Orbital Rotating Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                top: '15%',
                                right: '10%',
                                width: '200px',
                                height: '200px',
                                border: '1px solid var(--color-border)',
                                borderRadius: '50%',
                                opacity: 0.3,
                            }}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                bottom: '20%',
                                left: '5%',
                                width: '280px',
                                height: '280px',
                                border: '1px solid var(--color-border)',
                                borderRadius: '50%',
                                opacity: 0.2,
                            }}
                        />

                        {/* Original animated shapes */}
                        <div className={styles.shape1} />
                        <div className={styles.shape2} />
                        <div className={styles.shape3} />
                    </div>
                </div>

                <motion.div
                    className={styles.heroContent}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        variants={fadeInScale}
                        className={styles.heroBadge}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Badge variant="primary" size="lg">
                            <Shield size={14} /> Verified Properties Only
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className={styles.heroTitle}
                    >
                        Find Your Perfect<br />
                        <span className={styles.heroHighlight}>Property in Ghana</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
                        Ghana's trusted marketplace for verified properties.
                        Buy, rent, or invest with confidence and flexible payment plans.
                    </motion.p>

                    {/* Search Box */}
                    <motion.div variants={fadeInUp} className={styles.searchBox}>
                        <div className={styles.searchTabs}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${styles.searchTab} ${styles.active}`}
                            >
                                Buy
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.searchTab}
                            >
                                Rent
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.searchTab}
                            >
                                Hostels
                            </motion.button>
                        </div>
                        <div className={styles.searchInputs}>
                            <div className={styles.searchField}>
                                <MapPin size={20} />
                                <input type="text" placeholder="Location (e.g., East Legon, Kumasi)" />
                            </div>
                            <div className={styles.searchField}>
                                <Building2 size={20} />
                                <select>
                                    <option value="">Property Type</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="land">Land</option>
                                    <option value="office">Office</option>
                                </select>
                            </div>
                            <div className={styles.searchField}>
                                <CreditCard size={20} />
                                <select>
                                    <option value="">Price Range</option>
                                    <option value="0-100000">Under GHS 100,000</option>
                                    <option value="100000-500000">GHS 100,000 - 500,000</option>
                                    <option value="500000+">Above GHS 500,000</option>
                                </select>
                            </div>
                            <Link to="/properties">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant="primary" size="lg" leftIcon={<Search size={18} />}>
                                        Search
                                    </Button>
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className={styles.scrollIndicator}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={28} />
                    </motion.div>
                </motion.div>
            </section>

            {/* Value Props */}
            <section className={styles.valueProps}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.valueGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className={styles.valueCard}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <motion.div
                                className={styles.valueIcon}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Shield size={24} />
                            </motion.div>
                            <h3>100% Verified</h3>
                            <p>All properties verified through Ghana Lands Commission. No disputes, no fraud.</p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className={styles.valueCard}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <motion.div
                                className={styles.valueIcon}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <CreditCard size={24} />
                            </motion.div>
                            <h3>Flexible Payments</h3>
                            <p>Pay in installments with bank financing or owner arrangements. Up to 60 months.</p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className={styles.valueCard}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <motion.div
                                className={styles.valueIcon}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <MapPin size={24} />
                            </motion.div>
                            <h3>GPS Integration</h3>
                            <p>Easily locate properties with integrated maps and ride-hailing app support.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className={styles.featured}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2>Featured Properties</h2>
                            <p>Handpicked premium listings verified by our team</p>
                        </div>
                        <Link to="/properties">
                            <Button variant="outline" rightIcon={<ArrowRight size={16} />}>
                                View All
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.propertyGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {featuredProperties.map((property, index) => (
                            <motion.div
                                key={property.id}
                                variants={fadeInUp}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                custom={index}
                            >
                                <Link to={`/properties/${property.id}`}>
                                    <Card hoverable className={styles.propertyCard}>
                                        <div className={styles.propertyImage}>
                                            <img src={property.images[0]} alt={property.title} />
                                            <div className={styles.propertyBadges}>
                                                <Badge variant="primary">
                                                    {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
                                                </Badge>
                                                {property.flexiblePayment && (
                                                    <Badge variant="warning">Flexible Payment</Badge>
                                                )}
                                            </div>
                                        </div>
                                        <CardBody>
                                            <div className={styles.propertyMeta}>
                                                <span className={styles.propertyType}>{property.type}</span>
                                                <span className={styles.propertyLocation}>
                                                    <MapPin size={14} /> {property.location.city}
                                                </span>
                                            </div>
                                            <h3 className={styles.propertyTitle}>{property.title}</h3>
                                            <div className={styles.propertyFeatures}>
                                                {property.features.beds > 0 && (
                                                    <span>{property.features.beds} Beds</span>
                                                )}
                                                {property.features.baths > 0 && (
                                                    <span>{property.features.baths} Baths</span>
                                                )}
                                                <span>{property.features.area.toLocaleString()} sq ft</span>
                                            </div>
                                            <div className={styles.propertyPrice}>
                                                {property.listingType === 'sale'
                                                    ? formatCurrency(property.price)
                                                    : `${formatCurrency(property.pricePerMonth)}/month`
                                                }
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Property Types */}
            <section className={styles.propertyTypes}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2>Browse by Property Type</h2>
                            <p>Find exactly what you're looking for</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.typeGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { icon: <Home size={28} />, label: 'Houses', count: 245, link: '/properties?category=house' },
                            { icon: <Building2 size={28} />, label: 'Apartments', count: 180, link: '/properties?category=apartment' },
                            { icon: <MapPin size={28} />, label: 'Land', count: 120, link: '/properties?category=land' },
                            { icon: <Warehouse size={28} />, label: 'Commercial', count: 85, link: '/properties?category=commercial' },
                            { icon: <GraduationCap size={28} />, label: 'Student Hostels', count: 65, link: '/hostels' }
                        ].map((type, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <Link to={type.link}>
                                    <Card hoverable padding="md" className={styles.typeCard}>
                                        <motion.div
                                            className={styles.typeIcon}
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                        >
                                            {type.icon}
                                        </motion.div>
                                        <h3>{type.label}</h3>
                                        <p>{type.count} listings</p>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.howItWorks}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2>How It Works</h2>
                            <p>Simple steps to find your perfect property</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.stepsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { step: '01', title: 'Search Properties', desc: 'Browse verified listings with advanced filters' },
                            { step: '02', title: 'Schedule Viewing', desc: 'Book a visit or take a virtual tour' },
                            { step: '03', title: 'Apply & Verify', desc: 'Submit your application and documents' },
                            { step: '04', title: 'Move In', desc: 'Complete payment (flexible options available)' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className={styles.stepCard}
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.span
                                    className={styles.stepNumber}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.step}
                                </motion.span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.ctaContent}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to List Your Property?</h2>
                        <p>Join Ghana's most trusted property marketplace. Verification is quick and easy.</p>
                        <div className={styles.ctaButtons}>
                            <Link to="/register?type=owner">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant="primary" size="lg">List Your Property</Button>
                                </motion.div>
                            </Link>
                            <Link to="/about">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant="outline" size="lg">Learn More</Button>
                                </motion.div>
                            </Link>
                        </div>
                        <div className={styles.ctaFeatures}>
                            <span><CheckCircle size={16} /> Free to list</span>
                            <span><CheckCircle size={16} /> Verified badge</span>
                            <span><CheckCircle size={16} /> Flexible payments</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
