import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../../utils";
const PostLayoutTwo = ({ dataPost, postStart, show, bgColor }) => { 

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
    </>
  );
};

export default PostLayoutTwo;
