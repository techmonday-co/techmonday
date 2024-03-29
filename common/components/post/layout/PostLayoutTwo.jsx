import Link from "next/link";
import Image from "next/image";
import ReactPaginate from 'react-paginate';
import { slugify } from "../../../utils";
const PostLayoutTwo = ({ dataPost, postStart, show, bgColor, contentListLink = '', contentListLinkText = '', pageCount = 1, currentPage = 1 }) => { 
  if (!dataPost) {dataPost = []}

  function renderCategories(categories) {
    return (
      <div className="post-cat">
        {categories.map((category, index) => (
          <Link key={`category-${index}`}
            href={`/categories/${slugify(category.slug)}`}
            className="hover-flip-item-wrapper">
            <span className="hover-flip-item">
              <span data-text={category.name}>{category.name}</span>
            </span>
          </Link>
        ))}
      </div>
    )
  }

  function renderAuthorsName(authors) {
    return (
      <h6 className="post-author-name">
        {authors.map((author, index) => (
          <Link key={`post-layout-two-featured-post-author-${index}`}
                href={`/authors/${author.slug}`}
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

  function renderPaginate() {
    if (contentListLink !== "") {
      return (
        <div className='mt-4 text-sm-end'>
          <Link 
            href={contentListLink}
            className='see-all-topics'
          >
            {contentListLinkText}
          </Link>
        </div>
      )
    } else {
      if (pageCount > 1) {
        return (
          <ReactPaginate
            previousLabel={<i className="fas fa-arrow-left"></i>}
            nextLabel={<i className="fas fa-arrow-right"></i>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"prev"}
            nextLinkClassName={"next"}
            disabledClassName={"disabled"}
            activeClassName={"current"}
            forcePage={currentPage - 1}
          />
        )
      }
    }
  }

  const changePage = ({selected}) => {
    const pageNumber = selected + 1; // selected is zero-based index
    window.location.href = `/posts/page/${pageNumber}`;
  }

  return (
    <>
      {dataPost.map((post) => (
        <div
          className={`content-block post-list-view axil-control mt--30 ${bgColor || ""} ${post.sticky === true ? "sticky": ""} ${post.postFormat === 'quote' ? "format-quote" : ""}`}
          key={post.slug}
        >
			  {post.coverImage ? 
        <div className="post-thumbnail">
          <Link href={`/posts/${post.slug}`}>
            <Image
            src={post.coverImage}
            alt={post.title}
            height={250}
            width={295}
            priority={true}
            />
          </Link>
          {post.playBtn === true ? 
          <Link href={`/posts/${data.slug}`} className="video-popup size-medium position-top-center icon-color-secondary">
            <span className="play-icon"></span>
          </Link>
          : ""}
        </div>
        : "" }

        <div className="post-content">
          <div className="post-cat">
            <div className="post-cat-list">
              { renderCategories(post.categories) }
            </div>
          </div>
			{post.postFormat === 'quote' ? 
			<blockquote>
				<h4 className="title">
				<Link href={`/posts/${post.slug}`}>
					{post.title}
				</Link>
				</h4>
			</blockquote> : 
			<h4 className="title">
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h4>}
            <div className="post-meta-wrapper">
              <div className="post-meta">
                <div className="content">
                  { renderAuthorsName(post.authors) }
                  <ul className="post-meta-list">
                    <li>{post.date}</li>
                    <li>{post.read_time}</li>
                  </ul>
                </div>
              </div>
              <ul className="social-share-transparent justify-content-end">
                {/* {data.author_social.map((social) => (
                  <li key={social.url}>
                    <a href={social.url}>
                      <i className={social.icon} />
                    </a>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      ))}

      { renderPaginate() }
    </>
  );
};

export default PostLayoutTwo;
