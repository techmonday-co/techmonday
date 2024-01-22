import HeadTitle from '../../../common/elements/head/HeadTitle';
import HeaderOne from '../../../common/elements/header/HeaderOne';
import SidebarOne from '../../../common/components/sidebar/SidebarOne';
import FooterOne from '../../../common/elements/footer/FooterOne';
import PostLayoutTwo from '../../../common/components/post/layout/PostLayoutTwo';

import { getCategories } from '../../../lib/api/categories';
import { getPostCount, getPosts, getPopularPosts } from '../../../lib/api/posts'
import { getAuthors } from '../../../lib/api/authors';
import { getTags } from '../../../lib/api/tags';

export default function Posts({posts, categories, popularPosts, tags, authors}) {
  return (
    <>
      <HeadTitle pageTitle="All Podcasts" />
      <HeaderOne postData={[]} pClass="header-light header-sticky header-with-shadow" />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              {(posts && posts.data) ? <PostLayoutTwo dataPost={posts.data} /> : ''}
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              {(popularPosts && categories) ? <SidebarOne dataPost={popularPosts} categories={categories}/> : ''}
            </div>
          </div>
        </div>
      </div>
      {(categories && tags && authors) ? <FooterOne categories={categories} tags={tags} authors={authors}/> : '' }
    </>
  )
}

export async function getStaticProps({params}) {
  // console.log('building page ' + params.pageNumber)
  const posts = await getPosts({perPage: 10, page: parseInt(params.pageNumber)})
  const categories = await getCategories()
  const popularPosts = await getPopularPosts()
  const tags = await getTags(false)
  const authors = await getAuthors(false) 

  return {
    props: {
      posts,
      categories,
      popularPosts,
      tags,
      authors,
    }
  }
}

export async function getStaticPaths() {
  // find a way to get all pages
  const postCount = await getPostCount()
  const totalPages = calculateTotalPages(postCount, 10)

  // Create an array from 1 to totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => (i + 1).toString());
  // console.log(pageNumbers)

  return {
    paths: pageNumbers.map((pageNumber) => {
      return {
        params: {
          pageNumber
        },
      }
    }),
    fallback: true,
  }
}

function calculateTotalPages(totalCount, perPage) {
  return Math.ceil(totalCount / perPage);
}