// Codes By Mahdi Tasha
// Importing Parts
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
            <a href='#' className='breadcrumb__item'>Home</a>
            {arrayOfPathes.map(item => <a href='#' className='breadcrumb__item'>{item}</a>)}
        </div>
    );
}