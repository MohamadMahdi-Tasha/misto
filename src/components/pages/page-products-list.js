// Codes By Mahdi Tasha
// Exporting Page Products List Functional Component As Default
import React, { useState, useEffect } from "react";
import PageProductsItemComponent from "./page-products-item";
import PageProductItemsLoaderComponent from "./page-product-items-loader";

// Exporting Page Products List Component As Functional Component
export default function PageProductsListComponent({fetchType}) {
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
        <ul className='page--home__products-list'>
            <PageProductItemsLoaderComponent></PageProductItemsLoaderComponent>
            {
                (isLoaded)
                    ? fetchedItems.map(item => <PageProductsItemComponent key={fetchedItems.indexOf(item)} img={item.image} score={Math.round(item.rating.rate)} name={item.title.slice(0, 36)} price={item.price}/>)
                    : <PageProductItemsLoadersHolderComponent />
            }
        </ul>
    );
}