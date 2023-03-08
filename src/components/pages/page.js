// Codes By Mahdi Tasha
// Importing Part
import React, { useEffect } from "react";

// Exporting Page Functional Component As Default
export default function PageComponent({children, pageName}) {
    // Referencing To Page Holder
    const pageElementRef = React.createRef();

    // When Page Is Mounted Add Class Of 'page--opened' To Referenced Element Above
    useEffect(() => pageElementRef.current.classList.add('page--opened'));

    // Returning JSX
    return (
        <div className={`page page--${pageName}`} ref={pageElementRef}>
            <div className='page__inner'>
                {children}
            </div>
        </div>
    );
}