import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { slugify } from "../../utils";

const SliderOne = ({postData}) => {
  const slidePost = postData.filter(post => post.hero === true);

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow next-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-right"></i>
      </button>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow prev-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-left"></i>
      </button>
    );
  }

  const slideSettings = {
    dots: false,
    infinite: false,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  function renderCategories(categories) {
    return (
      <div className="post-cat">
        {categories.map((category, index) => (
          <div key={`category-${index}`}
               className="post-cat-list">
            <Link href={`/categories/${slugify(category.slug)}`}
                  className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
              <span data-text={category.name}>{category.name}</span>
              </span>
            </Link>
        </div>
        ))}
        
      </div>
    )
  }

  function renderAuthorsPicture(authors) {
    return (
      <>
        {authors.map((author, index) => (
          <div key={`author-picture-${index}`}
               className="post-author-avatar border-rounded"
          >
            <Image
                src={author.picture}
                alt={author.name}
                height={50}
                width={50}
                placeholder="blur"
                blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII=`}
              />
          </div>
        ))}
      </>
    )
  }

  function renderAuthorsName(authors) {
    return (
      <h6 className="post-author-name">
        {authors.map((author, index) => (
          <Link key={`author-${index}`}
                href={`/authors/${author.slug}`}
                className='hover-flip-item-wrapper'
          >
            <span className="hover-flip-item">
              <span data-text={author.name}>
                  {author.name}
              </span>
              {index !== authors.length - 1 && <span>&nbsp;และ&nbsp;</span>}
            </span>
          </Link>
        ))}
      </h6>
    )
  }
  
  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Slider {...slideSettings} className="slider-activation axil-slick-arrow">
               
                {slidePost.slice(0, 3).map((data) => (
                  <div className="content-block" key={data.slug}>
                    {/* Start Post Thumbnail  */}
                    {data.coverImage ? 
                    <div className="post-thumbnail">
                        <Link href={`/posts/${data.slug}`}>
                          <div 
                            style={{
                                backgroundImage: `url(${data.coverImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                paddingBottom: '50%',
                                cursor: 'pointer' // Since it's a Link, we want to indicate it's clickable
                            }}
                            alt={data.title} 
                            role="img" 
                            aria-label={data.title} // for accessibility since we're using a background image
                          ></div>
                        </Link>
                    </div>
                    :""}
                    {/* End Post Thumbnail  */}
                    {/* Start Post Content  */}
                    <div className="post-content">
                      { renderCategories(data.categories) }
                      <h2 className="title">
                        <Link href={`/posts/${data.slug}`}>
                          {data.title}
                        </Link>
                      </h2>
                      {/* Post Meta  */}
                      <div className="post-meta-wrapper with-button">
                        <div className="post-meta">
                          { renderAuthorsPicture(data.authors) }
                         
                          <div className="content">
                            { renderAuthorsName(data.authors) }
                            <ul className="post-meta-list">
                              <li>{data.date}</li>
                              {/* <li>{data.post_views}</li> */}
                              {/* <li>200K Views</li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="read-more-button cerchio">
                            <Link href={`/posts/${data.slug}`}
                                  className="axil-button button-rounded hover-flip-item-wrapper">
                              <span className="hover-flip-item">
                                  <span data-text="Read Post">Read Post</span>
                              </span>
                            </Link>
                        </div>
                      </div>
                    </div>
                    {/* End Post Content  */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderOne;