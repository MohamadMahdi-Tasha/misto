// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from 'react';
import PageComponent from "../../components/pages/page";
import PageSectionsComponent from "../../components/pages/page-sections";
import PageProductsListComponent from "../../components/pages/page-products-list";
import PageCategoriesTopSideComponent from "../../components/pages/page-categories-top-side";
import PageCategoriesFilterComponent from "../../components/pages/page-categories-filter-holder";

// Exporting Women Categories Page As Functional Component
export default function WomenPage() {
    // Setting State
    const [gridType, setGridType] = useState('row');

    // Creating Refs
    const refrenceOfColGridBtn = React.createRef();
    const refrenceOfRowGridBtn = React.createRef();

    // Handling Clicks Of Grid Type Buttons
    function handleClickOfColGridBtn() {
        setGridType('col');
        refrenceOfColGridBtn.current.setAttribute('data-selected', 'true');
        refrenceOfRowGridBtn.current.setAttribute('data-selected', 'false');
    }

    function handleClickOfRowGridBtn() {
        setGridType('row');
        refrenceOfColGridBtn.current.setAttribute('data-selected', 'false');
        refrenceOfRowGridBtn.current.setAttribute('data-selected', 'true');
    }

    // Returning JSX
    return (
        <PageComponent pageName={'women-cat'}>
            <PageSectionsComponent pageName={'women-cat'} sectionNumber={'first'}>
                <PageCategoriesTopSideComponent pageName={'women'}/>
                <PageCategoriesFilterComponent
                    refOfGridColBtn={refrenceOfColGridBtn}
                    refOfGridRowBtn={refrenceOfRowGridBtn}
                    onClickOfGridColBtn={handleClickOfColGridBtn}
                    onClickOfGridRowBtn={handleClickOfRowGridBtn}
                />
                <PageProductsListComponent gridType={gridType} fetchType={'women'}/>
            </PageSectionsComponent>
        </PageComponent>
    );
}
