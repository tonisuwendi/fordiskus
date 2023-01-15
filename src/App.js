import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewPage from './pages/NewPage';
import DetailPage from './pages/DetailPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './routes/ProtectedRoute';
import UnprotectedRoute from './routes/UnprotectedRoute';
import Leaderboards from './pages/Leaderboards';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/LoadingSpinner';
import { asyncPreloadProccess } from './states/isPreload/action';

const App = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { isPreload } = useSelector((states) => states);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    useEffect(() => {
        dispatch(asyncPreloadProccess());
    }, [dispatch]);

    if (isPreload) return <LoadingSpinner />;

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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
};

export default App;
