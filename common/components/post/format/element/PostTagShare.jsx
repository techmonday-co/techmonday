import Link from "next/link";
import { FacebookShare } from 'react-share-kit';
import { slugify } from "../../../../utils";

const URL = "https://techmonday.co";

const PostTagShare = ({postTags}) => {
  return (
    <>
      <div className="tagcloud">
        {postTags.tags ? postTags.tags.map((tag, index) => (
          <Link href={`/tags/${slugify(tag.slug)}`} key={`post-tag-${index}`}>
            {tag.name}
          </Link>
        )) : <></>}
      </div>
      <div className="social-share-block">
        <div className="post-like">
          <link href="#" />
          <a>
            <i className="fal fa-thumbs-up" />
            <span>2.2k Like</span>
          </a>
        </div>
        <ul className="social-icon icon-rounded-transparent md-size">
          <li>
            <FacebookShare url={`${URL}/posts/${postTags.slug}`} round={true} size={40} />
          </li>
          <li>
            <a href="https://instagram.com">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PostTagShare;
