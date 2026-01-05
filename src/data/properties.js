// Mock property data for Ghana
export const properties = [
    {
        id: 'prop-001',
        title: 'Luxury 4-Bedroom House in East Legon',
        type: 'house',
        listingType: 'sale',
        price: 850000,
        pricePerMonth: null,
        location: {
            address: '12 Palm Avenue',
            city: 'Accra',
            region: 'Greater Accra',
            coordinates: { lat: 5.6350, lng: -0.1540 }
        },
        features: {
            beds: 4,
            baths: 3,
            area: 3500,
            parking: 2,
            furnished: true
        },
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
        ],
        owner: {
            id: 'owner-001',
            name: 'Abena Properties Ltd',
            verified: true,
            phone: '+233 20 987 6543'
        },
        flexiblePayment: true,
        installmentOptions: {
            minDownPayment: 20,
            maxDuration: 60,
            interestRate: 12
        },
        verificationStatus: 'verified',
        description: 'Beautiful modern home with spacious living areas, swimming pool, and boys quarters. Located in the prestigious East Legon neighborhood.',
        amenities: ['Swimming Pool', 'Garden', 'Security', 'Boys Quarters', 'Generator'],
        createdAt: '2025-12-20',
        views: 342,
        isFeatured: true
    },
    {
        id: 'prop-002',
        title: '2-Bedroom Apartment in Airport Residential',
        type: 'apartment',
        listingType: 'rent',
        price: null,
        pricePerMonth: 3500,
        location: {
            address: '45 Airport Hills',
            city: 'Accra',
            region: 'Greater Accra',
            coordinates: { lat: 5.6070, lng: -0.1730 }
        },
        features: {
            beds: 2,
            baths: 2,
            area: 1200,
            parking: 1,
            furnished: true
        },
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
        ],
        owner: {
            id: 'owner-002',
            name: 'Kwame Estates',
            verified: true,
            phone: '+233 24 555 7890'
        },
        flexiblePayment: true,
        installmentOptions: {
            minDownPayment: 30,
            maxDuration: 12,
            interestRate: 8
        },
        verificationStatus: 'verified',
        description: 'Modern fully furnished apartment with gym access, 24/7 security, and backup power.',
        amenities: ['Gym', 'Security', 'Backup Power', 'Elevator', 'Parking'],
        createdAt: '2025-12-28',
        views: 156,
        isFeatured: true
    },
    {
        id: 'prop-003',
        title: 'Commercial Office Space in Osu',
        type: 'office',
        listingType: 'rent',
        price: null,
        pricePerMonth: 5000,
        location: {
            address: 'Oxford Street',
            city: 'Accra',
            region: 'Greater Accra',
            coordinates: { lat: 5.5560, lng: -0.1820 }
        },
        features: {
            beds: 0,
            baths: 2,
            area: 2500,
            parking: 5,
            furnished: false
        },
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800'
        ],
        owner: {
            id: 'owner-003',
            name: 'Osu Commercial Properties',
            verified: true,
            phone: '+233 27 111 2233'
        },
        flexiblePayment: false,
        verificationStatus: 'verified',
        description: 'Prime commercial space on Oxford Street, suitable for corporate offices or retail.',
        amenities: ['AC', 'Security', 'Parking', 'Conference Room'],
        createdAt: '2025-12-15',
        views: 89
    },
    {
        id: 'prop-004',
        title: '1-Acre Serviced Land in Tema Community 25',
        type: 'land',
        listingType: 'sale',
        price: 150000,
        pricePerMonth: null,
        location: {
            address: 'Community 25, Sector 3',
            city: 'Tema',
            region: 'Greater Accra',
            coordinates: { lat: 5.6698, lng: 0.0166 }
        },
        features: {
            beds: 0,
            baths: 0,
            area: 43560,
            parking: 0,
            furnished: false
        },
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
        ],
        owner: {
            id: 'owner-004',
            name: 'Tema Lands Development',
            verified: true,
            phone: '+233 26 444 5566'
        },
        flexiblePayment: true,
        installmentOptions: {
            minDownPayment: 40,
            maxDuration: 24,
            interestRate: 10
        },
        verificationStatus: 'verified',
        description: 'Fully documented and serviced land with road access, water, and electricity connections.',
        amenities: ['Road Access', 'Electricity', 'Water', 'Fenced'],
        createdAt: '2025-12-10',
        views: 234
    },
    {
        id: 'prop-005',
        title: 'Warehouse in Spintex Industrial Area',
        type: 'warehouse',
        listingType: 'rent',
        price: null,
        pricePerMonth: 8000,
        location: {
            address: 'Spintex Industrial Zone',
            city: 'Accra',
            region: 'Greater Accra',
            coordinates: { lat: 5.6340, lng: -0.0980 }
        },
        features: {
            beds: 0,
            baths: 2,
            area: 15000,
            parking: 10,
            furnished: false
        },
        images: [
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800'
        ],
        owner: {
            id: 'owner-005',
            name: 'Industrial Properties Ghana',
            verified: true,
            phone: '+233 28 777 8899'
        },
        flexiblePayment: false,
        verificationStatus: 'verified',
        description: 'Large warehouse with loading bays, office space, and 24/7 security.',
        amenities: ['Loading Bay', 'Office', 'Security', 'Parking'],
        createdAt: '2025-12-05',
        views: 67
    },
    {
        id: 'prop-006',
        title: '3-Bedroom House in Kumasi Asokwa',
        type: 'house',
        listingType: 'rent',
        price: null,
        pricePerMonth: 2000,
        location: {
            address: 'Asokwa New Road',
            city: 'Kumasi',
            region: 'Ashanti',
            coordinates: { lat: 6.6666, lng: -1.6163 }
        },
        features: {
            beds: 3,
            baths: 2,
            area: 2200,
            parking: 1,
            furnished: false
        },
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
        ],
        owner: {
            id: 'owner-006',
            name: 'Kumasi Homes',
            verified: true,
            phone: '+233 25 333 4455'
        },
        flexiblePayment: true,
        installmentOptions: {
            minDownPayment: 25,
            maxDuration: 12,
            interestRate: 10
        },
        verificationStatus: 'verified',
        description: 'Well-maintained 3-bedroom house in a quiet neighborhood with easy access to main roads.',
        amenities: ['Garage', 'Garden', 'Security'],
        createdAt: '2025-12-25',
        views: 123
    }
];

// Hostel listings
export const hostels = [
    {
        id: 'hostel-001',
        title: 'University Lodge - Legon',
        type: 'hostel',
        listingType: 'rent',
        price: null,
        pricePerMonth: 500,
        location: {
            address: 'Near University of Ghana Main Gate',
            city: 'Accra',
            region: 'Greater Accra',
            coordinates: { lat: 5.6508, lng: -0.1869 }
        },
        features: {
            beds: 1,
            baths: 1,
            area: 150,
            parking: 0,
            furnished: true
        },
        roomTypes: [
            { type: '1 in a room', price: 800 },
            { type: '2 in a room', price: 500 },
            { type: '4 in a room', price: 300 }
        ],
        images: [
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'
        ],
        owner: {
            id: 'owner-007',
            name: 'Legon Student Housing',
            verified: true,
            phone: '+233 24 888 9900'
        },
        flexiblePayment: true,
        nearbyUniversities: ['University of Ghana'],
        verificationStatus: 'verified',
        description: 'Clean and secure student hostel just 5 minutes walk from University of Ghana main campus.',
        amenities: ['Wi-Fi', 'Study Room', 'Security', 'Water Tank', 'Common Kitchen'],
        createdAt: '2025-12-01',
        views: 567,
        availableRooms: 15
    },
    {
        id: 'hostel-002',
        title: 'KNUST Premium Hostel',
        type: 'hostel',
        listingType: 'rent',
        price: null,
        pricePerMonth: 450,
        location: {
            address: 'Ayeduase Gate Area',
            city: 'Kumasi',
            region: 'Ashanti',
            coordinates: { lat: 6.6742, lng: -1.5667 }
        },
        features: {
            beds: 1,
            baths: 1,
            area: 120,
            parking: 0,
            furnished: true
        },
        roomTypes: [
            { type: '1 in a room', price: 700 },
            { type: '2 in a room', price: 450 },
            { type: '3 in a room', price: 350 }
        ],
        images: [
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'
        ],
        owner: {
            id: 'owner-008',
            name: 'KNUST Area Hostels',
            verified: true,
            phone: '+233 27 555 6677'
        },
        flexiblePayment: true,
        nearbyUniversities: ['KNUST'],
        verificationStatus: 'verified',
        description: 'Modern hostel with excellent facilities near KNUST Ayeduase gate.',
        amenities: ['Wi-Fi', 'Laundry', 'Security', 'Cafeteria', 'Study Room'],
        createdAt: '2025-11-28',
        views: 432,
        availableRooms: 20
    }
];

// Regions in Ghana
export const regions = [
    'Greater Accra',
    'Ashanti',
    'Western',
    'Central',
    'Eastern',
    'Volta',
    'Northern',
    'Upper East',
    'Upper West',
    'Brong Ahafo',
    'Oti',
    'Bono East',
    'Ahafo',
    'Savannah',
    'North East',
    'Western North'
];

// Property types
export const propertyTypes = [
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'land', label: 'Land' },
    { value: 'office', label: 'Office Space' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'shop', label: 'Shop' },
    { value: 'hostel', label: 'Hostel' }
];

// Universities for hostel filtering
export const universities = [
    'University of Ghana',
    'KNUST',
    'University of Cape Coast',
    'University of Education, Winneba',
    'Ghana Institute of Management and Public Administration',
    'Ashesi University',
    'Central University',
    'University of Professional Studies',
    'Ghana Technology University College',
    'Accra Technical University',
    'Kumasi Technical University',
    'Takoradi Technical University'
];
