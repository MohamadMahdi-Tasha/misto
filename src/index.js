// Importing React And React Dom
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Creating Root With Element With Id Of 'root' Then Rendering Whole Routes In React Strict Mode
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/*<Route path='/' element={<HomePage />}/>*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);