import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Layouts
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';

// Pages (will be created in Phase 3)
import HomePage from './pages/public/HomePage';
import PropertyListingPage from './pages/public/PropertyListingPage';
import PropertyDetailPage from './pages/public/PropertyDetailPage';
import HostelListingPage from './pages/public/HostelListingPage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Dashboard layouts (will be created in Phase 5+)
import CustomerDashboard from './pages/customer/CustomerDashboard';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import BankDashboard from './pages/bank/BankDashboard';
import StudentDashboard from './pages/student/StudentDashboard';

import './index.css';

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
            <Route path="/properties" element={<PublicLayout><PropertyListingPage /></PublicLayout>} />
            <Route path="/properties/:id" element={<PublicLayout><PropertyDetailPage /></PublicLayout>} />
            <Route path="/hostels" element={<PublicLayout><HostelListingPage /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard/customer/*" element={<CustomerDashboard />} />
            <Route path="/dashboard/owner/*" element={<OwnerDashboard />} />
            <Route path="/dashboard/bank/*" element={<BankDashboard />} />
            <Route path="/dashboard/student/*" element={<StudentDashboard />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
