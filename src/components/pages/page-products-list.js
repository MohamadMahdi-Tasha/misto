// Codes By Mahdi Tasha
// Exporting Page Products List Functional Component As Default
import React, { useState, useEffect } from "react";
import PageProductsItemComponent from "./page-products-item";
import PageProductItemsLoaderComponent from "./page-product-items-loader";

// Exporting Page Products List Component As Functional Component
export default function PageProductsListComponent({fetchType,gridType}) {
    // Creating States
    const [fetchedItems, setFetchedItems] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    // Using useEffect Hook To Call Api And Using It
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${fetchType}'s%20clothing`)
            .then(data => data.json())
            .then(data => {
                setFetchedItems(data);
                setLoaded(true);
            })
    })

    // Returning JSX Of Loaders Holder
    function PageProductItemsLoadersHolderComponent() {
        return (
            <>
                <PageProductItemsLoaderComponent />
                <PageProductItemsLoaderComponent />
                <PageProductItemsLoaderComponent />
                <PageProductItemsLoaderComponent />
            </>
        );
    }

    // Returning JSX
    return (
        <ul className={(gridType === undefined || gridType === 'row')
            ? 'page--home__products-list page--home__products-list--grid-row'
            : 'page--home__products-list page--home__products-list--grid-col'
        }>
            {
                (isLoaded)
                    ? fetchedItems.map(item =>
                        <PageProductsItemComponent
                            key={fetchedItems.indexOf(item)}
                            img={item.image}
                            score={Math.round(item.rating.rate)}
                            name={item.title}
                            id={item.id}
                            price={item.price}/>
                    )
                    : <PageProductItemsLoadersHolderComponent />
            }
        </ul>
    );
}