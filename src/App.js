import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import DetailPage from './pages/DetailPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './routes/ProtectedRoute';
import UnprotectedRoute from './routes/UnprotectedRoute';
import Leaderboards from './pages/Leaderboards';

const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/leaderboards" element={<Leaderboards />} />
                    <Route path="/new" element={<ProtectedRoute><NewPage /></ProtectedRoute>} />
                    <Route path="/thread/:threadId" element={<DetailPage />} />
                    <Route path="/login" element={<UnprotectedRoute><LoginPage /></UnprotectedRoute>} />
                    <Route path="/register" element={<UnprotectedRoute><RegisterPage /></UnprotectedRoute>} />
                </Routes>
            </main>
        </>
    );
};

export default App;
