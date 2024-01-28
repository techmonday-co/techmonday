import { getCategories } from '../../lib/api/categories';
import { getPosts, getPopularPosts, getPostCount } from '../../lib/api/posts'
import { getAuthors } from '../../lib/api/authors';
import { getTags } from '../../lib/api/tags';
import { calculateTotalPages } from '../../lib/utils/pagination';

import HeadTitle from '../../common/elements/head/HeadTitle';
import HeaderOne from '../../common/elements/header/HeaderOne';
import SidebarOne from '../../common/components/sidebar/SidebarOne';
import FooterOne from '../../common/elements/footer/FooterOne';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';

export default function Posts({posts, categories, popularPosts, tags, trendingAuthors, pageCount, currentPage}) {
  return (
    <>
      <HeadTitle pageTitle="All Podcasts" />
      <HeaderOne postData={[]} pClass="header-light header-sticky header-with-shadow" />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <PostLayoutTwo dataPost={posts.data} pageCount={pageCount} currentPage={currentPage} />
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <SidebarOne dataPost={popularPosts} categories={categories}/>
            </div>
          </div>
        </div>
      </div>
      <FooterOne categories={categories} tags={tags} authors={trendingAuthors}/>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts({perPage: 10, page: 1})
  const categories = await getCategories()
  const popularPosts = await getPopularPosts()
  const tags = await getTags(false)
  const trendingAuthors = await getAuthors({perPage: 6, trending: true})

  const postCount = await getPostCount()
  const pageCount = calculateTotalPages(postCount, 10)

  const currentPage = 1

  return {
    props: {
      posts,
      categories,
      popularPosts,
      tags,
      trendingAuthors: trendingAuthors.data,
      pageCount,
      currentPage,
    }
  }
}

