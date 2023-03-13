// Codes By Mahdi Tasha
// Importing Parts
import React from "react";
import { useLocation } from "react-router-dom";

// Exporting Page Categories BreadCrumb Component As Functional Component
export default function PageCategoriesBreadCrumbComponent() {
    // Using 'useLocation' Hook To Find Path Of Page
    const url = useLocation();
    const pathNameOfUrl = url.pathname;
    const pathNameWithoutFistSlash = pathNameOfUrl.slice(1, pathNameOfUrl.length);
    const arrayOfPathes = pathNameWithoutFistSlash.split('/');

    // Returning JSX
    return (
        <div className='breadcrumb'>
            <h6 className='breadcrumb__item'>Home</h6>
            {arrayOfPathes.map(item => <h6 className='breadcrumb__item'>{item}</h6>)}
        </div>
    );
}