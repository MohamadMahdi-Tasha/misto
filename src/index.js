// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import './dist/style.css';

// Creating Root With Element With Id Of 'root' Then Rendering Whole Routes In React Strict Mode
ReactDOM.createRoot(document.getElementById('root')).render(
    // Returning JSX
    <React.StrictMode>
        <HeaderComponent />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
        <FooterComponent />
    </React.StrictMode>
);