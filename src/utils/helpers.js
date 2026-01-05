// Currency formatter for Ghana Cedis
export function formatCurrency(amount, options = {}) {
    const { showCurrency = true, decimals = 0 } = options;

    if (amount === null || amount === undefined) return '-';

    const formatted = new Intl.NumberFormat('en-GH', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(amount);

    return showCurrency ? `GHS ${formatted}` : formatted;
}

// Format area in sq ft
export function formatArea(sqft) {
    return `${new Intl.NumberFormat('en-GH').format(sqft)} sq ft`;
}

// Format date
export function formatDate(dateString, options = {}) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        ...options
    });
}

// Format relative time (e.g., "2 days ago")
export function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
}

// Get property type label
export function getPropertyTypeLabel(type) {
    const labels = {
        house: 'House',
        apartment: 'Apartment',
        land: 'Land',
        office: 'Office Space',
        warehouse: 'Warehouse',
        shop: 'Shop',
        hostel: 'Hostel'
    };
    return labels[type] || type;
}

// Get listing type label
export function getListingTypeLabel(type) {
    return type === 'sale' ? 'For Sale' : 'For Rent';
}

// Truncate text
export function truncateText(text, maxLength = 100) {
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

// Generate random ID
export function generateId(prefix = '') {
    return `${prefix}${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Debounce function
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Validate email
export function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate Ghana phone number
export function isValidGhanaPhone(phone) {
    const re = /^(\+233|0)[2-5][0-9]{8}$/;
    return re.test(phone.replace(/\s/g, ''));
}
