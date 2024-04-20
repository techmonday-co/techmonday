import { 
  getHeroPosts,
  getPopularPosts
} from '../../lib/api/posts'
import {
  getCategories
} from '../../lib/api/categories'
import {
  getTags,
} from '../../lib/api/tags'
import {
  getAuthors,
  getAuthorCount
} from '../../lib/api/authors'
import {
  calculateTotalPages
} from '../../lib/utils/pagination'

import HeadTitle from '../../common/elements/head/HeadTitle';
import HeaderOne from '../../common/elements/header/HeaderOne';
import SidebarOne from '../../common/components/sidebar/SidebarOne';
import FooterOne from '../../common/elements/footer/FooterOne';
import AuthorLayoutOne from '../../common/components/author/layout/AuthorLayoutOne';

export default function Index({
  heroPosts,
  popularPosts,
  categories,
  tags,
  authors,
  pageCount,
  currentPage,
  trendingAtuhors
}) {
  return (
    <>
      <HeadTitle title="Tech Monday - Authors" />
      <HeaderOne postData={heroPosts}/>
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              {/* <PostLayoutTwo dataPost={posts.data} pageCount={pageCount} currentPage={currentPage} /> */}
              <AuthorLayoutOne authors={authors} pageCount={pageCount} currentPage={currentPage} />
            </div>
            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <SidebarOne dataPost={popularPosts} categories={categories}/>
            </div>
          </div>
        </div>
      </div>
      <FooterOne categories={categories} tags={tags} authors={trendingAtuhors}/>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const heroPosts = await getHeroPosts(preview)
  const categories = await getCategories(preview)
  const popularPosts = await getPopularPosts()
  const tags = await getTags(preview)
  const authors = await getAuthors({perPage: 10, page: 1})
  const trendingAtuhors = await getAuthors({perPage: 6, trending: true})

  const postCount = await getAuthorCount()
  const pageCount = calculateTotalPages(postCount, 10)

  const currentPage = 1

  return {
    props: {
      heroPosts,
      categories,
      popularPosts,
      tags,
      authors,
      pageCount,
      currentPage,
      trendingAtuhors
    }
  }
}