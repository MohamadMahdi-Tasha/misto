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

    // A Little Component For Name And Icon Of BreaCrumbs
    function BreadCrumbInnerNameComponent({name}) {
        // Returning JSX
        return (
            <>
                {
                    (name === undefined)
                        ? <h6>Home</h6>
                        : <h6>{name}</h6>
                }
            </>
        );
    }

    // Returning JSX
    return (
        <div>
            <BreadCrumbInnerNameComponent/>
            {arrayOfPathes.map(item => <BreadCrumbInnerNameComponent name={item}/>)}
        </div>
    );
}