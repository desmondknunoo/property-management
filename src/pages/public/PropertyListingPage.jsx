import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search,
    MapPin,
    Grid3X3,
    List,
    SlidersHorizontal,
    X,
    ChevronDown,
    Heart,
    Building2,
    Bed,
    Bath,
    Square,
    Car,
    CheckCircle,
    Map
} from 'lucide-react';
import Button from '../../components/ui/Button/Button';
import { Card, CardBody } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import Input from '../../components/ui/Input/Input';
import { PropertyCardSkeleton } from '../../components/ui/Skeleton/Skeleton';
import { properties, regions, propertyTypes } from '../../data/properties';
import { formatCurrency, formatArea } from '../../utils/helpers';
import styles from './PropertyListingPage.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

export default function PropertyListingPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);

    // Filter states
    const [filters, setFilters] = useState({
        search: searchParams.get('q') || '',
        listingType: searchParams.get('type') || 'all',
        propertyType: searchParams.get('category') || 'all',
        region: searchParams.get('region') || 'all',
        minPrice: searchParams.get('minPrice') || '',
        maxPrice: searchParams.get('maxPrice') || '',
        minBeds: searchParams.get('beds') || '',
        flexiblePayment: searchParams.get('flexible') === 'true',
        verified: true
    });

    const [sortBy, setSortBy] = useState('newest');

    // Filter and sort properties
    const filteredProperties = useMemo(() => {
        let result = [...properties];

        // Search filter
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(searchLower) ||
                p.location.city.toLowerCase().includes(searchLower) ||
                p.location.region.toLowerCase().includes(searchLower)
            );
        }

        // Listing type filter
        if (filters.listingType !== 'all') {
            result = result.filter(p => p.listingType === filters.listingType);
        }

        // Property type filter
        if (filters.propertyType !== 'all') {
            result = result.filter(p => p.type === filters.propertyType);
        }

        // Region filter
        if (filters.region !== 'all') {
            result = result.filter(p => p.location.region === filters.region);
        }

        // Price filter
        if (filters.minPrice) {
            const min = parseInt(filters.minPrice);
            result = result.filter(p => {
                const price = p.listingType === 'sale' ? p.price : p.pricePerMonth;
                return price >= min;
            });
        }

        if (filters.maxPrice) {
            const max = parseInt(filters.maxPrice);
            result = result.filter(p => {
                const price = p.listingType === 'sale' ? p.price : p.pricePerMonth;
                return price <= max;
            });
        }

        // Beds filter
        if (filters.minBeds) {
            result = result.filter(p => p.features.beds >= parseInt(filters.minBeds));
        }

        // Flexible payment filter
        if (filters.flexiblePayment) {
            result = result.filter(p => p.flexiblePayment);
        }

        // Verified only
        if (filters.verified) {
            result = result.filter(p => p.verificationStatus === 'verified');
        }

        // Sort
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => {
                    const priceA = a.listingType === 'sale' ? a.price : a.pricePerMonth;
                    const priceB = b.listingType === 'sale' ? b.price : b.pricePerMonth;
                    return priceA - priceB;
                });
                break;
            case 'price-high':
                result.sort((a, b) => {
                    const priceA = a.listingType === 'sale' ? a.price : a.pricePerMonth;
                    const priceB = b.listingType === 'sale' ? b.price : b.pricePerMonth;
                    return priceB - priceA;
                });
                break;
            case 'popular':
                result.sort((a, b) => b.views - a.views);
                break;
            default:
                result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        return result;
    }, [filters, sortBy]);

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
            search: '',
            listingType: 'all',
            propertyType: 'all',
            region: 'all',
            minPrice: '',
            maxPrice: '',
            minBeds: '',
            flexiblePayment: false,
            verified: true
        });
    };

    const activeFilterCount = Object.values(filters).filter(v => v && v !== 'all' && v !== true).length;

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerTop}>
                        <div>
                            <h1>{filteredProperties.length} Properties</h1>
                            <p className={styles.subtitle}>
                                {filters.listingType === 'sale' ? 'For Sale' : filters.listingType === 'rent' ? 'For Rent' : 'Buy or Rent'} in Ghana
                            </p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className={styles.searchBar}>
                        <div className={styles.searchInput}>
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search by location, property name..."
                                value={filters.search}
                                onChange={(e) => handleFilterChange('search', e.target.value)}
                            />
                        </div>

                        <div className={styles.quickFilters}>
                            <select
                                value={filters.listingType}
                                onChange={(e) => handleFilterChange('listingType', e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="all">Any Price</option>
                                <option value="sale">For Sale</option>
                                <option value="rent">For Rent</option>
                            </select>

                            <select
                                value={filters.minBeds}
                                onChange={(e) => handleFilterChange('minBeds', e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="">Beds</option>
                                <option value="1">1+ Beds</option>
                                <option value="2">2+ Beds</option>
                                <option value="3">3+ Beds</option>
                                <option value="4">4+ Beds</option>
                            </select>

                            <select
                                value={filters.propertyType}
                                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="all">All Types</option>
                                {propertyTypes.map(type => (
                                    <option key={type.value} value={type.value}>{type.label}</option>
                                ))}
                            </select>

                            <button
                                className={`${styles.filterBtn} ${showFilters ? styles.active : ''}`}
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <SlidersHorizontal size={18} />
                                More
                                {activeFilterCount > 0 && (
                                    <span className={styles.filterCount}>{activeFilterCount}</span>
                                )}
                            </button>
                        </div>

                        <div className={styles.viewControls}>
                            <label className={styles.toggle}>
                                <input
                                    type="checkbox"
                                    checked={showMap}
                                    onChange={(e) => setShowMap(e.target.checked)}
                                />
                                <Map size={16} />
                                <span>Map View</span>
                            </label>

                            <div className={styles.viewModes}>
                                <button
                                    className={viewMode === 'grid' ? styles.active : ''}
                                    onClick={() => setViewMode('grid')}
                                    aria-label="Grid view"
                                >
                                    <Grid3X3 size={18} />
                                </button>
                                <button
                                    className={viewMode === 'list' ? styles.active : ''}
                                    onClick={() => setViewMode('list')}
                                    aria-label="List view"
                                >
                                    <List size={18} />
                                </button>
                            </div>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className={styles.sortSelect}
                            >
                                <option value="newest">Sort by: Newest</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="popular">Most Popular</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Filters Panel */}
            {showFilters && (
                <motion.div
                    className={styles.filtersPanel}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                >
                    <div className={styles.container}>
                        <div className={styles.filtersGrid}>
                            <div className={styles.filterGroup}>
                                <label>Region</label>
                                <select
                                    value={filters.region}
                                    onChange={(e) => handleFilterChange('region', e.target.value)}
                                >
                                    <option value="all">All Regions</option>
                                    {regions.map(region => (
                                        <option key={region} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.filterGroup}>
                                <label>Min Price (GHS)</label>
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={filters.minPrice}
                                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                                />
                            </div>

                            <div className={styles.filterGroup}>
                                <label>Max Price (GHS)</label>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={filters.maxPrice}
                                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                />
                            </div>

                            <div className={styles.filterGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={filters.flexiblePayment}
                                        onChange={(e) => handleFilterChange('flexiblePayment', e.target.checked)}
                                    />
                                    Flexible Payment Available
                                </label>
                            </div>
                        </div>

                        <div className={styles.filtersActions}>
                            <button onClick={clearFilters} className={styles.clearBtn}>
                                Clear All
                            </button>
                            <Button variant="primary" onClick={() => setShowFilters(false)}>
                                Apply Filters
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Main Content */}
            <div className={styles.content}>
                <div className={`${styles.container} ${showMap ? styles.withMap : ''}`}>
                    {/* Property Grid */}
                    <div className={styles.propertiesWrapper}>
                        {isLoading ? (
                            <div className={`${styles.propertyGrid} ${styles[viewMode]}`}>
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <PropertyCardSkeleton key={i} />
                                ))}
                            </div>
                        ) : filteredProperties.length === 0 ? (
                            <div className={styles.emptyState}>
                                <Building2 size={48} />
                                <h3>No properties found</h3>
                                <p>Try adjusting your filters or search criteria</p>
                                <Button variant="outline" onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            </div>
                        ) : (
                            <motion.div
                                className={`${styles.propertyGrid} ${styles[viewMode]}`}
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                {filteredProperties.map(property => (
                                    <motion.div key={property.id} variants={fadeInUp}>
                                        <PropertyCard
                                            property={property}
                                            viewMode={viewMode}
                                            isFavorite={favorites.includes(property.id)}
                                            onToggleFavorite={() => toggleFavorite(property.id)}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Map View */}
                    {showMap && (
                        <div className={styles.mapContainer}>
                            <div className={styles.mapPlaceholder}>
                                <Map size={48} />
                                <h3>Map View</h3>
                                <p>Interactive map will be integrated with Leaflet in Phase 9</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Property Card Component
function PropertyCard({ property, viewMode, isFavorite, onToggleFavorite }) {
    const price = property.listingType === 'sale'
        ? formatCurrency(property.price)
        : `${formatCurrency(property.pricePerMonth)}/month`;

    return (
        <Link to={`/properties/${property.id}`} className={styles.propertyLink}>
            <Card hoverable className={`${styles.propertyCard} ${styles[viewMode]}`}>
                <div className={styles.propertyImage}>
                    <img src={property.images[0]} alt={property.title} loading="lazy" />
                    <div className={styles.propertyBadges}>
                        <Badge variant={property.listingType === 'sale' ? 'primary' : 'info'}>
                            {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
                        </Badge>
                        {property.flexiblePayment && (
                            <Badge variant="warning">Flexible Payment</Badge>
                        )}
                    </div>
                    <button
                        className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onToggleFavorite();
                        }}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                    </button>
                    {property.verificationStatus === 'verified' && (
                        <div className={styles.verifiedBadge}>
                            <CheckCircle size={14} /> Verified
                        </div>
                    )}
                </div>

                <CardBody>
                    <div className={styles.propertyInfo}>
                        <div className={styles.propertyMeta}>
                            <span className={styles.propertyType}>{property.type}</span>
                            <span className={styles.propertyLocation}>
                                <MapPin size={14} /> {property.location.city}, {property.location.region}
                            </span>
                        </div>

                        <h3 className={styles.propertyTitle}>{property.title}</h3>

                        <div className={styles.propertyFeatures}>
                            {property.features.beds > 0 && (
                                <span><Bed size={16} /> {property.features.beds} Beds</span>
                            )}
                            {property.features.baths > 0 && (
                                <span><Bath size={16} /> {property.features.baths} Baths</span>
                            )}
                            <span><Square size={16} /> {property.features.area.toLocaleString()} sq ft</span>
                            {property.features.parking > 0 && (
                                <span><Car size={16} /> {property.features.parking}</span>
                            )}
                        </div>

                        <div className={styles.propertyFooter}>
                            <div className={styles.propertyPrice}>{price}</div>
                            <div className={styles.propertyOwner}>
                                <span className={styles.ownerName}>{property.owner.name}</span>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Link>
    );
}
