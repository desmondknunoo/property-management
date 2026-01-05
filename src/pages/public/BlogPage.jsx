import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    Clock,
    ArrowRight,
    Tag
} from 'lucide-react';
import { Card, CardBody } from '../../components/ui/Card/Card';
import { Badge } from '../../components/ui/Badge/Badge';
import styles from './StaticPages.module.css';

const blogPosts = [
    {
        id: 1,
        title: '5 Things to Check Before Buying Land in Ghana',
        excerpt: 'Protect yourself from land fraud with these essential verification steps...',
        category: 'Buying Guide',
        date: '2026-01-03',
        readTime: '5 min',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600'
    },
    {
        id: 2,
        title: 'Understanding Flexible Payment Plans',
        excerpt: 'How bank financing and owner installments can help you afford your dream property...',
        category: 'Financing',
        date: '2026-01-01',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600'
    },
    {
        id: 3,
        title: 'Top 10 Neighborhoods in Accra for Young Professionals',
        excerpt: 'Discover the best areas for work-life balance, amenities, and commute times...',
        category: 'Living Guide',
        date: '2025-12-28',
        readTime: '7 min',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600'
    },
    {
        id: 4,
        title: 'Property Owner Guide: Maximizing Rental Income',
        excerpt: 'Tips for setting competitive prices, attracting quality tenants, and managing properties...',
        category: 'For Owners',
        date: '2025-12-25',
        readTime: '6 min',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600'
    },
    {
        id: 5,
        title: 'Student Hostel Checklist: What to Look For',
        excerpt: 'Essential factors to consider when choosing your university accommodation...',
        category: 'Students',
        date: '2025-12-20',
        readTime: '4 min',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600'
    },
    {
        id: 6,
        title: 'Ghana Lands Commission: What You Need to Know',
        excerpt: 'A comprehensive guide to the property registration process in Ghana...',
        category: 'Legal',
        date: '2025-12-15',
        readTime: '8 min',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600'
    }
];

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <BookOpen size={48} style={{ color: 'var(--color-primary)', marginBottom: '16px' }} />
                        <h1>PropGhana Blog</h1>
                        <p className={styles.heroText}>
                            Insights, guides, and tips for property buyers, renters, and owners in Ghana
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
                        {blogPosts.map((post, i) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Card hoverable style={{ height: '100%', overflow: 'hidden' }}>
                                    <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <CardBody>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                                            <Badge variant="secondary" size="sm">
                                                <Tag size={12} /> {post.category}
                                            </Badge>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <Clock size={12} /> {post.readTime}
                                            </span>
                                        </div>
                                        <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.125rem' }}>{post.title}</h3>
                                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            to="#"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '4px',
                                                color: 'var(--color-primary)',
                                                fontWeight: 500,
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            Read More <ArrowRight size={14} />
                                        </Link>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
