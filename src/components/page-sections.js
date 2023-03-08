// Codes By Mahdi Tasha
// Exporting Page Sections Functional Component As Default
export default function PageSectionsComponent(props) {
    // Returning JSX
    return (
        <section className={`page--${props.pageName}__${props.sectionNumber}-sect`}>
            <main className={`page--${props.pageName}__${props.sectionNumber}-sect__main`}>
                {props.children}
            </main>
        </section>
    );
}