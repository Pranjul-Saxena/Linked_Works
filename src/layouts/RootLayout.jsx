import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;