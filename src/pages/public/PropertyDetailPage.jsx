import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Heart,
    Share2,
    MapPin,
    Bed,
    Bath,
    Square,
    Car,
    CheckCircle,
    Calendar,
    Eye,
    Phone,
    Mail,
    MessageCircle,
    ChevronLeft,
    ChevronRight,
    Play,
    CreditCard,
    Calculator,
    Shield,
    Navigation,
    Building2,
    X
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody, CardHeader } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import { Modal } from '../../components/ui/Modal/Modal';
import { properties } from '../../data/properties';
import { formatCurrency, formatRelativeTime } from '../../utils/helpers';
import styles from './PropertyDetailPage.module.css';

export default function PropertyDetailPage() {
    const { id } = useParams();
    const [activeImage, setActiveImage] = useState(0);
    const [showGallery, setShowGallery] = useState(false);
    const [showCalculator, setShowCalculator] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    // Calculator state
    const [calcValues, setCalcValues] = useState({
        downPayment: 20,
        duration: 24
    });

    // Find property by ID
    const property = properties.find(p => p.id === id);

    if (!property) {
        return (
            <div className={styles.notFound}>
                <Building2 size={64} />
                <h1>Property Not Found</h1>
                <p>The property you're looking for doesn't exist or has been removed.</p>
                <Link to="/properties">
                    <Button variant="primary">Browse Properties</Button>
                </Link>
            </div>
        );
    }

    const price = property.listingType === 'sale'
        ? formatCurrency(property.price)
        : `${formatCurrency(property.pricePerMonth)}/month`;

    const totalPrice = property.listingType === 'sale' ? property.price : property.pricePerMonth * 12;

    // Calculate monthly payment for flexible payment
    const calculateMonthlyPayment = () => {
        if (!property.flexiblePayment || !property.installmentOptions) return null;

        const principal = totalPrice * (1 - calcValues.downPayment / 100);
        const monthlyRate = property.installmentOptions.interestRate / 100 / 12;
        const months = calcValues.duration;

        const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

        return payment;
    };

    const monthlyPayment = calculateMonthlyPayment();

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    return (
        <div className={styles.page}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <div className={styles.container}>
                    <Link to="/properties" className={styles.backLink}>
                        <ArrowLeft size={20} />
                        Back to listings
                    </Link>
                    <div className={styles.actions}>
                        <button
                            className={`${styles.actionBtn} ${isFavorite ? styles.active : ''}`}
                            onClick={() => setIsFavorite(!isFavorite)}
                        >
                            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                            Save
                        </button>
                        <button className={styles.actionBtn}>
                            <Share2 size={20} />
                            Share
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Gallery */}
            <section className={styles.gallery}>
                <div className={styles.mainImage} onClick={() => setShowGallery(true)}>
                    <img src={property.images[activeImage]} alt={property.title} />
                    <div className={styles.imageOverlay}>
                        <span>Click to view all photos</span>
                    </div>

                    {property.images.length > 1 && (
                        <>
                            <button className={`${styles.navBtn} ${styles.prev}`} onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                                <ChevronLeft size={24} />
                            </button>
                            <button className={`${styles.navBtn} ${styles.next}`} onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}

                    <div className={styles.imageCounter}>
                        {activeImage + 1} / {property.images.length}
                    </div>
                </div>

                {property.images.length > 1 && (
                    <div className={styles.thumbnails}>
                        {property.images.slice(0, 4).map((img, i) => (
                            <button
                                key={i}
                                className={`${styles.thumbnail} ${activeImage === i ? styles.active : ''}`}
                                onClick={() => setActiveImage(i)}
                            >
                                <img src={img} alt={`View ${i + 1}`} />
                                {i === 3 && property.images.length > 4 && (
                                    <span className={styles.moreCount}>+{property.images.length - 4}</span>
                                )}
                            </button>
                        ))}
                        <button className={styles.virtualTour}>
                            <Play size={24} />
                            <span>Virtual Tour</span>
                        </button>
                    </div>
                )}
            </section>

            {/* Main Content */}
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.mainContent}>
                        {/* Property Header */}
                        <motion.div
                            className={styles.propertyHeader}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className={styles.badges}>
                                <Badge variant={property.listingType === 'sale' ? 'primary' : 'info'} size="lg">
                                    {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
                                </Badge>
                                {property.flexiblePayment && (
                                    <Badge variant="warning" size="lg">Flexible Payment</Badge>
                                )}
                                {property.verificationStatus === 'verified' && (
                                    <Badge variant="success" size="lg" icon={<CheckCircle size={14} />}>
                                        Verified
                                    </Badge>
                                )}
                            </div>

                            <h1 className={styles.title}>{property.title}</h1>

                            <div className={styles.location}>
                                <MapPin size={18} />
                                {property.location.address}, {property.location.city}, {property.location.region}
                            </div>

                            <div className={styles.priceRow}>
                                <div className={styles.price}>{price}</div>
                                {property.flexiblePayment && monthlyPayment && (
                                    <div className={styles.installment}>
                                        <span>From {formatCurrency(monthlyPayment)}/month</span>
                                        <button onClick={() => setShowCalculator(true)}>
                                            <Calculator size={16} /> Calculate
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Features */}
                        <Card className={styles.featuresCard}>
                            <CardBody>
                                <div className={styles.features}>
                                    {property.features.beds > 0 && (
                                        <div className={styles.feature}>
                                            <Bed size={24} />
                                            <span className={styles.featureValue}>{property.features.beds}</span>
                                            <span className={styles.featureLabel}>Bedrooms</span>
                                        </div>
                                    )}
                                    {property.features.baths > 0 && (
                                        <div className={styles.feature}>
                                            <Bath size={24} />
                                            <span className={styles.featureValue}>{property.features.baths}</span>
                                            <span className={styles.featureLabel}>Bathrooms</span>
                                        </div>
                                    )}
                                    <div className={styles.feature}>
                                        <Square size={24} />
                                        <span className={styles.featureValue}>{property.features.area.toLocaleString()}</span>
                                        <span className={styles.featureLabel}>Sq Ft</span>
                                    </div>
                                    {property.features.parking > 0 && (
                                        <div className={styles.feature}>
                                            <Car size={24} />
                                            <span className={styles.featureValue}>{property.features.parking}</span>
                                            <span className={styles.featureLabel}>Parking</span>
                                        </div>
                                    )}
                                </div>
                            </CardBody>
                        </Card>

                        {/* Description */}
                        <Card>
                            <CardHeader title="About This Property" />
                            <CardBody>
                                <p className={styles.description}>{property.description}</p>
                            </CardBody>
                        </Card>

                        {/* Amenities */}
                        {property.amenities && property.amenities.length > 0 && (
                            <Card>
                                <CardHeader title="Amenities & Features" />
                                <CardBody>
                                    <div className={styles.amenities}>
                                        {property.amenities.map((amenity, i) => (
                                            <div key={i} className={styles.amenity}>
                                                <CheckCircle size={18} />
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        )}

                        {/* Location */}
                        <Card>
                            <CardHeader
                                title="Location"
                                action={
                                    <Button variant="ghost" size="sm" leftIcon={<Navigation size={16} />}>
                                        Get Directions
                                    </Button>
                                }
                            />
                            <CardBody>
                                <div className={styles.mapPlaceholder}>
                                    <MapPin size={48} />
                                    <h3>{property.location.city}, {property.location.region}</h3>
                                    <p>Interactive map will be available soon</p>
                                    <div className={styles.rideHailing}>
                                        <span>Get there with:</span>
                                        <button className={styles.rideBtn}>Uber</button>
                                        <button className={styles.rideBtn}>Bolt</button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Property Details */}
                        <Card>
                            <CardHeader title="Property Details" />
                            <CardBody>
                                <div className={styles.detailsGrid}>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Property Type</span>
                                        <span className={styles.detailValue}>{property.type}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Listing Type</span>
                                        <span className={styles.detailValue}>{property.listingType === 'sale' ? 'For Sale' : 'For Rent'}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Listed</span>
                                        <span className={styles.detailValue}>{formatRelativeTime(property.createdAt)}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Views</span>
                                        <span className={styles.detailValue}>{property.views}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Furnished</span>
                                        <span className={styles.detailValue}>{property.features.furnished ? 'Yes' : 'No'}</span>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>Verification</span>
                                        <span className={styles.detailValue}>
                                            <Badge variant="success" size="sm">
                                                <CheckCircle size={12} /> Verified
                                            </Badge>
                                        </span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* Contact Card */}
                        <Card variant="elevated" className={styles.contactCard}>
                            <CardBody>
                                <div className={styles.ownerInfo}>
                                    <div className={styles.ownerAvatar}>
                                        {property.owner.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className={styles.ownerName}>{property.owner.name}</h4>
                                        {property.owner.verified && (
                                            <Badge variant="success" size="sm">
                                                <Shield size={12} /> Verified Owner
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.contactActions}>
                                    <Button variant="primary" fullWidth leftIcon={<Phone size={18} />}>
                                        Call Now
                                    </Button>
                                    <Button variant="outline" fullWidth leftIcon={<MessageCircle size={18} />}>
                                        Send Message
                                    </Button>
                                    <Button variant="ghost" fullWidth leftIcon={<Mail size={18} />}>
                                        Email Owner
                                    </Button>
                                </div>

                                <div className={styles.contactNote}>
                                    <p>Mention you found this on PropGhana for a better response</p>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Flexible Payment Card */}
                        {property.flexiblePayment && property.installmentOptions && (
                            <Card variant="glass" className={styles.paymentCard}>
                                <CardBody>
                                    <div className={styles.paymentHeader}>
                                        <CreditCard size={24} />
                                        <div>
                                            <h4>Flexible Payment Available</h4>
                                            <p>Pay in installments up to {property.installmentOptions.maxDuration} months</p>
                                        </div>
                                    </div>

                                    <div className={styles.paymentDetails}>
                                        <div className={styles.paymentDetail}>
                                            <span>Min. Down Payment</span>
                                            <strong>{property.installmentOptions.minDownPayment}%</strong>
                                        </div>
                                        <div className={styles.paymentDetail}>
                                            <span>Interest Rate</span>
                                            <strong>{property.installmentOptions.interestRate}%</strong>
                                        </div>
                                        <div className={styles.paymentDetail}>
                                            <span>Max Duration</span>
                                            <strong>{property.installmentOptions.maxDuration} months</strong>
                                        </div>
                                    </div>

                                    <Button
                                        variant="primary"
                                        fullWidth
                                        onClick={() => setShowCalculator(true)}
                                        leftIcon={<Calculator size={18} />}
                                    >
                                        Calculate Payment
                                    </Button>
                                </CardBody>
                            </Card>
                        )}

                        {/* Schedule Visit */}
                        <Card>
                            <CardBody>
                                <h4 className={styles.scheduleTitle}>Schedule a Visit</h4>
                                <p className={styles.scheduleText}>Book a viewing at your convenience</p>
                                <Button variant="outline" fullWidth leftIcon={<Calendar size={18} />}>
                                    Request Viewing
                                </Button>
                            </CardBody>
                        </Card>
                    </aside>
                </div>
            </div>

            {/* Payment Calculator Modal */}
            <Modal
                isOpen={showCalculator}
                onClose={() => setShowCalculator(false)}
                title="Payment Calculator"
                size="md"
            >
                <div className={styles.calculator}>
                    <div className={styles.calcRow}>
                        <label>Property Price</label>
                        <div className={styles.calcValue}>{formatCurrency(totalPrice)}</div>
                    </div>

                    <div className={styles.calcRow}>
                        <label>Down Payment ({calcValues.downPayment}%)</label>
                        <input
                            type="range"
                            min={property.installmentOptions?.minDownPayment || 20}
                            max={50}
                            value={calcValues.downPayment}
                            onChange={(e) => setCalcValues(prev => ({ ...prev, downPayment: parseInt(e.target.value) }))}
                        />
                        <div className={styles.calcValue}>{formatCurrency(totalPrice * calcValues.downPayment / 100)}</div>
                    </div>

                    <div className={styles.calcRow}>
                        <label>Duration ({calcValues.duration} months)</label>
                        <input
                            type="range"
                            min={6}
                            max={property.installmentOptions?.maxDuration || 60}
                            value={calcValues.duration}
                            onChange={(e) => setCalcValues(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                        />
                    </div>

                    <div className={styles.calcResult}>
                        <span>Monthly Payment</span>
                        <strong>{formatCurrency(monthlyPayment || 0)}</strong>
                    </div>

                    <p className={styles.calcNote}>
                        *This is an estimate. Final terms subject to approval and documentation.
                    </p>

                    <Button variant="primary" fullWidth>
                        Apply for Financing
                    </Button>
                </div>
            </Modal>

            {/* Full Gallery Modal */}
            <Modal
                isOpen={showGallery}
                onClose={() => setShowGallery(false)}
                title="Property Gallery"
                size="xl"
            >
                <div className={styles.fullGallery}>
                    <img src={property.images[activeImage]} alt={property.title} />
                    <div className={styles.galleryNav}>
                        <button onClick={prevImage}><ChevronLeft size={24} /></button>
                        <span>{activeImage + 1} / {property.images.length}</span>
                        <button onClick={nextImage}><ChevronRight size={24} /></button>
                    </div>
                    <div className={styles.galleryThumbs}>
                        {property.images.map((img, i) => (
                            <button
                                key={i}
                                className={activeImage === i ? styles.active : ''}
                                onClick={() => setActiveImage(i)}
                            >
                                <img src={img} alt={`View ${i + 1}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
