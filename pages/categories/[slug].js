import { getAllCategories, getCategoryBySlug, getCategories } from '../../lib/api/categories';
import { getTags } from '../../lib/api/tags';
import { getPopularPosts } from '../../lib/api/posts';
import { getAuthors } from '../../lib/api/authors';

import HeadTitle from "../../common/elements/head/HeadTitle";
import HeaderOne from '../../common/elements/header/HeaderOne';
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import SidebarOne from '../../common/components/sidebar/SidebarOne';
import FooterOne from '../../common/elements/footer/FooterOne';

const Category = ({ category, categories, popularPosts, tags, trendingAuthors }) => {
	
	return (
		<>
      <HeadTitle title={`${category.name}`} />
      <HeaderOne postData={[]} />
      <BreadcrumbOne title={category.name} />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
          <div className="col-lg-8 col-xl-8">
            <PostLayoutTwo dataPost={category.posts} show="5"/>
          </div>
          <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
            <SidebarOne dataPost={popularPosts} categories={categories}/>
          </div>
          </div>
        </div>
      </div>
      <FooterOne categories={categories} tags={tags} authors={trendingAuthors}/>
		</>
	);
}

export default Category;


export async function getStaticProps({ params, preview }) {
  const category = await getCategoryBySlug(params.slug, preview)
  const categories = await getCategories(preview)
  const popularPosts = await getPopularPosts(preview)
  const tags = await getTags(preview)
  const trendingAuthors = await getAuthors({perPage: 6, trending: true})

  return {
    props: {
      category,
      categories,
      popularPosts,
      tags,
      trendingAuthors
    }
  }
}


export async function getStaticPaths() {
  const categories = await getAllCategories()

  return {
    paths: categories.map((category) => {
      return {
        params: {
          slug: `${category.slug}`
        },
      }
    }),
    fallback: false,
  }
}
