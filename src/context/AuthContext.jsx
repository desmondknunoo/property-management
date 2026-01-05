import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Mock user data for different user types
const mockUsers = {
    customer: {
        id: 'cust-001',
        name: 'Kofi Mensah',
        email: 'kofi@example.com',
        type: 'customer',
        avatar: null,
        verified: true,
        phone: '+233 24 123 4567'
    },
    owner: {
        id: 'owner-001',
        name: 'Abena Properties Ltd',
        email: 'abena@properties.com',
        type: 'owner',
        avatar: null,
        verified: true,
        phone: '+233 20 987 6543',
        propertiesCount: 12,
        totalTenants: 28
    },
    bank: {
        id: 'bank-001',
        name: 'GCB Bank',
        email: 'admin@gcb.com.gh',
        type: 'bank',
        avatar: null,
        verified: true,
        activeLoans: 45,
        totalFinancing: 2850000
    },
    student: {
        id: 'student-001',
        name: 'Kwame Asante',
        email: 'kwame@university.edu.gh',
        type: 'student',
        avatar: null,
        verified: true,
        university: 'University of Ghana',
        parentGuarantor: 'Yaw Asante'
    }
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (userType) => {
        // Mock login - in real app, this would call an API
        const mockUser = mockUsers[userType];
        if (mockUser) {
            setUser(mockUser);
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const switchUser = (userType) => {
        // For demo purposes - switch between user types
        const mockUser = mockUsers[userType];
        if (mockUser) {
            setUser(mockUser);
            setIsAuthenticated(true);
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout,
            switchUser,
            mockUsers
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
