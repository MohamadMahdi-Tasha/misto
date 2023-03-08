// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";

// Exporting Page Functional Component As Default
export default function PageComponent({children}) {
    const pageElementRef = React.createRef();
    useEffect(() => pageElementRef.current.classList.add('page--opened'));

    // Returning JSX
    return (
        <div className='page page--home' ref={pageElementRef}>
            <div className='page__inner'>
                {children}
            </div>
        </div>
    );
}