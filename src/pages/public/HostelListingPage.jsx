import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search,
    MapPin,
    GraduationCap,
    Wifi,
    Shield,
    Users,
    Heart,
    CheckCircle,
    Filter
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import { hostels, universities } from '../../data/properties';
import { formatCurrency } from '../../utils/helpers';
import styles from './HostelListingPage.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

export default function HostelListingPage() {
    const [search, setSearch] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [roomType, setRoomType] = useState('');
    const [favorites, setFavorites] = useState([]);

    const filteredHostels = useMemo(() => {
        let result = [...hostels];

        if (search) {
            const searchLower = search.toLowerCase();
            result = result.filter(h =>
                h.title.toLowerCase().includes(searchLower) ||
                h.location.city.toLowerCase().includes(searchLower)
            );
        }

        if (selectedUniversity) {
            result = result.filter(h =>
                h.nearbyUniversities.includes(selectedUniversity)
            );
        }

        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            result = result.filter(h => {
                const minPrice = Math.min(...h.roomTypes.map(r => r.price));
                return minPrice >= min && (!max || minPrice <= max);
            });
        }

        return result;
    }, [search, selectedUniversity, priceRange]);

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge variant="primary" size="lg">
                            <GraduationCap size={16} /> For Students
                        </Badge>
                        <h1>Find Your Perfect<br />Student Hostel</h1>
                        <p>
                            Verified hostels near universities across Ghana.
                            Flexible payment options available for students and parents.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search & Filters */}
            <section className={styles.filters}>
                <div className={styles.container}>
                    <div className={styles.searchBar}>
                        <div className={styles.searchInput}>
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search hostels by name or location..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <select
                            value={selectedUniversity}
                            onChange={(e) => setSelectedUniversity(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="">All Universities</option>
                            {universities.map(uni => (
                                <option key={uni} value={uni}>{uni}</option>
                            ))}
                        </select>

                        <select
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="">Any Price</option>
                            <option value="0-400">Under GHS 400/month</option>
                            <option value="400-600">GHS 400 - 600/month</option>
                            <option value="600-1000">Above GHS 600/month</option>
                        </select>

                        <Button variant="primary" leftIcon={<Filter size={18} />}>
                            Filter
                        </Button>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className={styles.results}>
                <div className={styles.container}>
                    <div className={styles.resultsHeader}>
                        <h2>{filteredHostels.length} Hostels Found</h2>
                        <p>Showing verified student hostels</p>
                    </div>

                    {filteredHostels.length === 0 ? (
                        <div className={styles.emptyState}>
                            <GraduationCap size={48} />
                            <h3>No hostels found</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    ) : (
                        <motion.div
                            className={styles.hostelGrid}
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            {filteredHostels.map(hostel => (
                                <motion.div key={hostel.id} variants={fadeInUp}>
                                    <Link to={`/properties/${hostel.id}`} className={styles.hostelLink}>
                                        <Card hoverable className={styles.hostelCard}>
                                            <div className={styles.hostelImage}>
                                                <img src={hostel.images[0]} alt={hostel.title} />
                                                <div className={styles.hostelBadges}>
                                                    <Badge variant="primary">Student Hostel</Badge>
                                                    {hostel.flexiblePayment && (
                                                        <Badge variant="warning">Flexible Payment</Badge>
                                                    )}
                                                </div>
                                                <button
                                                    className={`${styles.favoriteBtn} ${favorites.includes(hostel.id) ? styles.active : ''}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleFavorite(hostel.id);
                                                    }}
                                                >
                                                    <Heart size={20} fill={favorites.includes(hostel.id) ? 'currentColor' : 'none'} />
                                                </button>
                                                {hostel.verificationStatus === 'verified' && (
                                                    <div className={styles.verifiedBadge}>
                                                        <CheckCircle size={14} /> Verified
                                                    </div>
                                                )}
                                            </div>

                                            <CardBody>
                                                <div className={styles.hostelInfo}>
                                                    <div className={styles.hostelMeta}>
                                                        <span className={styles.university}>
                                                            <GraduationCap size={14} />
                                                            Near {hostel.nearbyUniversities[0]}
                                                        </span>
                                                    </div>

                                                    <h3 className={styles.hostelTitle}>{hostel.title}</h3>

                                                    <div className={styles.hostelLocation}>
                                                        <MapPin size={14} />
                                                        {hostel.location.address}, {hostel.location.city}
                                                    </div>

                                                    <div className={styles.roomTypes}>
                                                        {hostel.roomTypes.map((room, i) => (
                                                            <div key={i} className={styles.roomType}>
                                                                <span>{room.type}</span>
                                                                <strong>{formatCurrency(room.price)}/month</strong>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className={styles.hostelAmenities}>
                                                        {hostel.amenities.slice(0, 4).map((amenity, i) => (
                                                            <span key={i} className={styles.amenity}>
                                                                {amenity === 'Wi-Fi' && <Wifi size={14} />}
                                                                {amenity === 'Security' && <Shield size={14} />}
                                                                {amenity}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className={styles.hostelFooter}>
                                                        <div className={styles.availableRooms}>
                                                            <Users size={16} />
                                                            {hostel.availableRooms} rooms available
                                                        </div>
                                                        <Button variant="primary" size="sm">View Details</Button>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Student Info */}
            <section className={styles.studentInfo}>
                <div className={styles.container}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoContent}>
                            <h2>Student & Parent Payment Plans</h2>
                            <p>
                                We understand that paying for student accommodation can be challenging.
                                That's why we offer flexible payment options for students and their parents.
                            </p>
                            <ul>
                                <li><CheckCircle size={18} /> Pay in installments throughout the semester</li>
                                <li><CheckCircle size={18} /> Parent guarantor system available</li>
                                <li><CheckCircle size={18} /> Bank financing options for qualified applicants</li>
                                <li><CheckCircle size={18} /> Easy documentation process</li>
                            </ul>
                            <Link to="/register?type=student">
                                <Button variant="primary" size="lg">Apply as Student</Button>
                            </Link>
                        </div>
                        <div className={styles.infoImage}>
                            <GraduationCap size={120} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
