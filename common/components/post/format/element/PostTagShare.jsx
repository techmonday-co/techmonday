import Link from "next/link";
import { FacebookShare, LineShare, LinkedinShare, TwitterShare } from 'react-share-kit';
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
          {/* <link href="#" />
          <a>
            <i className="fal fa-thumbs-up" />
            <span>2.2k Like</span>
          </a> */}
        </div>
        <ul className="social-icon icon-rounded-transparent md-size">
          <li>
            <FacebookShare
              url={`${URL}/posts/${postTags.slug}`}
              round={true}
              size={40}
            />
          </li>
          <li>
            <TwitterShare
              url={`${URL}/posts/${postTags.slug}`}
              round={true}
              size={40}
            />
          </li>
          <li>
            <LinkedinShare
              url={`${URL}/posts/${postTags.slug}`}
              round={true}
              size={40}
            />
          </li>
          <li>
            <LineShare
              url={`${URL}/posts/${postTags.slug}`}
              round={true}
              size={40}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default PostTagShare;
