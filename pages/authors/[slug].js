import Link from 'next/link';
import Image from 'next/image';
import { 
  getAllAuthors, 
  getAuthorBySlug, 
  getPopularPosts,
  getCategories,
  getTags,
  getAuthors
} from '../../lib/api';

import HeadTitle from "../../common/elements/head/HeadTitle";
import HeaderOne from '../../common/elements/header/HeaderOne';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import SidebarOne from '../../common/components/sidebar/SidebarOne';
import FooterOne from '../../common/elements/footer/FooterOne';

export default function Author({author, categories, popularPosts, tags, authors}) {
  const renderAuthor = () => {
    return (
      <div className="axil-author-area axil-author-banner bg-color-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-author">
                <div className="media">
                  <div className="thumbnail">
                    <Link href="#">
                      <Image
                        src={author.picture}
                        alt={author.name}
                        height={105}
                        width={105}
                        priority={true}
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <div className="author-info">
                      <h1 className="title">{author.name}</h1>
                      <span className="b3 subtitle">{author.designation}</span>
                    </div>
                    <div className="content">
                      <p className="b1 description">{author.bio}</p>
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
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderAuthorPosts = () => {
    return (
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title">
                <h2 className="title mb--40">Articles By This Author</h2>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <PostLayoutTwo dataPost={author.posts} />
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <SidebarOne dataPost={popularPosts} categories={categories}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <HeadTitle pageTitle={`${author.name}`} />
      <HeaderOne postData={[]} />
      { renderAuthor() }
      { renderAuthorPosts() }
      <FooterOne categories={categories} tags={tags} authors={authors}/>
    </>
  )
}

export async function getStaticProps({ params, preview }) {
  const author = await getAuthorBySlug(params.slug, preview)
  const categories = await getCategories(preview)
  const popularPosts = await getPopularPosts(preview)
  const tags = await getTags(preview)
  const authors = await getAuthors(preview)
  return {
    props: {
      author,
      categories,
      popularPosts,
      tags,
      authors
    }
  }
}

export async function getStaticPaths() {
  const authors = await getAllAuthors()

  return {
    paths: authors.map((author) => {
      return {
        params: {
          slug: `${author.slug}`
        },
      }
    }),
    fallback: false,
  }
}