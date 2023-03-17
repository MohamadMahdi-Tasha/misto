// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import HomePage from './pages/home';
import CategoriesPage from "./pages/categories";
import ProductPage from "./pages/product";
import Page404 from "./pages/404";
import './dist/style.css';

// Creating Root With Element With Id Of 'root' Then Rendering Whole Routes In React Strict Mode
ReactDOM.createRoot(document.getElementById('root')).render(
    // Returning JSX
    <React.StrictMode>
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route exact path='/' element={ <HomePage /> } />
                <Route path='/categories/:type' element={ <CategoriesPage/> }/>
                <Route path='/product/:id' element={ <ProductPage /> } />
                <Route path='*' element={ <Page404 /> } />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    </React.StrictMode>
);