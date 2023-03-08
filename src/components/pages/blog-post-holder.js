// Codes By Mahdi Tasha
// Exporting Blog Post Holder Functional Component As Default
export default function BlogPostHolderComponent(props) {
    // Returning JSX
    return (
        <ul className='page--home__sixth-sect__blogs-holder'>{props.children}</ul>
    );
}
