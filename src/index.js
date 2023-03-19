// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import HomePage from './pages/home';
import CategoriesPage from "./pages/categories";
import ProductPage from "./pages/product";
import Page404 from "./pages/404";
import './dist/style.css';

// Creating Card And Liked Contexts And Exporting Them
export const CardProductsContext = React.createContext();
export const LikedProductsContext = React.createContext();

// Creating Card And Liked Products Variables And Exporting Them
export let CardProducts = [];
export let LikedProducts = [];

// A Little Function To Return Whole App
function App(){
    // Creating States Of Like And Card
    const [cardProducts, setCardProduct] = useState(CardProducts);
    const [likedProducts, setLikedProduct] = useState(LikedProducts);

    // Returning JSX
    return(
        <React.StrictMode>
            <BrowserRouter>
                <CardProductsContext.Provider value={cardProducts}>
                    <LikedProductsContext.Provider value={likedProducts}>
                        <HeaderComponent />
                        <Routes>
                            <Route exact path='/' element={ <HomePage /> } />
                            <Route path='/categories/:type' element={ <CategoriesPage/> }/>
                            <Route path='/product/:id' element={ <ProductPage /> } />
                            <Route path='*' element={ <Page404 /> } />
                        </Routes>
                        <FooterComponent />
                    </LikedProductsContext.Provider>
                </CardProductsContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

// Creating Root With Element With Id Of 'root' Then Rendering App Component In It
ReactDOM.createRoot(document.getElementById('root')).render(<App />);