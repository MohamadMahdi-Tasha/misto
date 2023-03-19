// Codes By Mahdi Tasha
// Exporting Blog Post Functional Component As Default
export default function PageBlogPostComponent(props) {
    // returning JSX
    return (
        <li className='page--home__sixth-sect__blog-post-li'>
            <a className='page--home__sixth-sect__blog-post-inner-link' href="#">
                <img className='page--home__sixth-sect__blog-post-img' src={props.img} alt={props.name}/>
                <div className='page--home__sixth-sect__blog-post-content-holder'>
                    <div className='page--home__sixth-sect__blog-post-top-side-content'>
                        <h6 className='page--home__sixth-sect__blog-post-name'>{props.name}</h6>
                        <p className='page--home__sixth-sect__blog-post-top-side-paragraph'>{props.pargraph}</p>
                    </div>
                    <div className='page--home__sixth-sect__blog-post-bottom-side-content'>
                        <h6 className='page--home__sixth-sect__blog-post-bottom-side-date'>{props.date}</h6>
                        <a tabIndex='-1' className='page--home__sixth-sect__blog-post-bottom-side-link' href="#">Read More</a>
                    </div>
                </div>
            </a>
        </li>
    );
}
