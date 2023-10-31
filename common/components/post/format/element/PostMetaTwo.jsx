import Image from 'next/image';
import Link from "next/link";
import {slugify} from '../../../../utils';

const PostMetaTwo = ({metaData}) => {

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
          <div key={`meta-author-picture-${index}`}
               className="post-author-avatar border-rounded">
            {author.picture ? <Image
              src={author.picture}
              alt={author.name}
              height={50}
              width={50}
            /> : ''}
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
                className="hover-flip-item-wrapper">
            <span className="hover-flip-item">
              <span data-text={author.name}>{author.name}</span>
              {index !== authors.length - 1 && <span>&nbsp;และ&nbsp;</span>}
            </span>
          </Link>
        ))}
      </h6>
    )
  }

    return (
      <div className="banner banner-single-post post-formate post-video axil-section-gapBottom post-meta-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Single Slide  */}
              <div className="content-block">
                {/* Start Post Content  */}
                <div className="post-content">
                  { renderCategories(metaData.categories) }

                  <h1 className="title">{metaData.title}</h1>
                  {/* Post Meta  */}
                  <div className="post-meta-wrapper">
                    <div className="post-meta">
                      { renderAuthorsPicture(metaData.authors) }
                      <div className="content">
                        { renderAuthorsName(metaData.authors) }
                        <ul className="post-meta-list">
                          <li>{metaData.date}</li>
                          <li>{metaData.post_views}</li>
                        </ul>
                      </div>
                    </div>
                    {/* <ul className="social-share-transparent justify-content-end">
                        { metaData.author_social.map((social) => (
                            <li key={social.url}>
                             <a href={social.url}>
                               <i className={social.icon} />
                             </a>
                           </li>
                        ))}
                    </ul> */}
                  </div>
                </div>
                {/* End Post Content  */}
              </div>
              {/* End Single Slide  */}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PostMetaTwo;