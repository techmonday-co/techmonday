import Link from "next/link";
import Image from 'next/image';

const PostAuthor = ({authors}) => {
  return (
    <>
      {authors.map((author, index) => (
        <div key={`author-${index}`} 
             className="about-author">
          <div className="media">
            <div className="thumbnail">
              {author.picture ? <Link href="#">
                <Image
                  src={author.picture}
                  alt={author.name}
                  height={105}
                  width={105}
                />
              </Link> : '' }
            </div>
          <div className="media-body">
            <div className="author-info">
              <h5 className="title">
              <Link href={`/authors/${author.slug}`}
                    className="hover-flip-item-wrapper">
                <span className="hover-flip-item">
                  <span data-text={author.name}>{author.name}</span>
                </span>
              </Link>
              </h5>
              <span className="b3 subtitle">{author.designation}</span>
            </div>
            <div className="content">
              <p className="b1 description">
                {author.bio}
              </p>
              <ul className="social-share-transparent size-md">
                {author.facebook ? <li>
                  <a href={author.facebook}>
                    <i className='fab fa-facebook-f' />
                  </a>
                </li> : ''}
                {author.twitter ? <li>
                  <a href={author.twitter}>
                    <i className='fab fa-twitter' />
                  </a>
                </li> : ''}
                {author.instagram ? <li>
                  <a href={author.instagram}>
                    <i className='fab fa-instagram' />
                  </a>
                </li> : ''}
                {author.linkedIn ? <li>
                  <a href={author.linkedIn}>
                    <i className='fas fa-link' />
                  </a>
                </li> : ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default PostAuthor;
