import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    Star
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import { properties } from '../../data/properties';
import { formatCurrency } from '../../utils/helpers';
import styles from './HomePage.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function HomePage() {
    const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 3);

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <div className={styles.heroGradient} />
                    <div className={styles.heroShapes}>
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
                    <motion.div variants={fadeInUp} className={styles.heroBadge}>
                        <Badge variant="primary" size="lg">
                            <Shield size={14} /> Verified Properties Only
                        </Badge>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
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
                            <button className={`${styles.searchTab} ${styles.active}`}>Buy</button>
                            <button className={styles.searchTab}>Rent</button>
                            <button className={styles.searchTab}>Hostels</button>
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
                                <Button variant="primary" size="lg" leftIcon={<Search size={18} />}>
                                    Search
                                </Button>
                            </Link>
                        </div>
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
                        <motion.div variants={fadeInUp} className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Shield size={24} />
                            </div>
                            <h3>100% Verified</h3>
                            <p>All properties verified through Ghana Lands Commission. No disputes, no fraud.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <CreditCard size={24} />
                            </div>
                            <h3>Flexible Payments</h3>
                            <p>Pay in installments with bank financing or owner arrangements. Up to 60 months.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <MapPin size={24} />
                            </div>
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
                        {featuredProperties.map(property => (
                            <motion.div key={property.id} variants={fadeInUp}>
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
                            <motion.div key={i} variants={fadeInUp}>
                                <Link to={type.link}>
                                    <Card hoverable padding="md" className={styles.typeCard}>
                                        <div className={styles.typeIcon}>{type.icon}</div>
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
                            <motion.div key={i} variants={fadeInUp} className={styles.stepCard}>
                                <span className={styles.stepNumber}>{item.step}</span>
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
                                <Button variant="primary" size="lg">List Your Property</Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" size="lg">Learn More</Button>
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
