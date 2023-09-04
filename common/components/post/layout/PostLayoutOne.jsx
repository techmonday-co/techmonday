import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../../utils";

const PostLayoutOne = ({ postData, itemShow }) => {
  const featuredPost = postData.filter(post => post.featured === true );

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
          <Link key={'featured-post-author-${index}'}
                href={`/author/${slugify('test')}`}
                className="hover-flip-item-wrapper">
            <span className="hover-flip-item">
              <span data-text={author.name}>
                {author.name}
                {index !== authors.length - 1 && <span>&nbsp;และ&nbsp;</span>}
              </span>
            </span>
          </Link>
        ))}
      
      </h6>
    )
  }

  return (
    <>
      {featuredPost.slice(0, itemShow).map((data) => (
        <div
          className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30"
          key={data.slug}>
          <div className="content-block content-direction-column post-horizontal thumb-border-rounded">
            <div className="post-content">
              { renderCategories(data.categories) }
              <h4 className="title">
                <Link href={`/posts/${data.slug}`}>
                  {data.title}
                </Link>
              </h4>
              <div className="post-meta">
                {renderAuthorsPicture(data.authors)}
                <div className="content">
                  {renderAuthorsName(data.authors)}
                  <ul className="post-meta-list">
                    <li>{data.date}</li>
                    <li>{data.post_views}</li>
                  </ul>
                </div>
              </div>
            </div>
            {data.coverImage ? 
            <div className="post-thumbnail">
              <Link href={`/posts/${data.slug}`}>
                <div 
                  style={{
                      backgroundImage: `url(${data.coverImage})`,
                  }}
                  alt={data.title} 
                  role="img" 
                  aria-label={data.title} // for accessibility since we're using a background image
                ></div>
              </Link>
            </div>
            : "" }
          </div>
        </div>
      ))}
    </>
  );
};

export default PostLayoutOne;
