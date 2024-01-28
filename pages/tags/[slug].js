import Link from 'next/link';
import Image from 'next/image';
import { getAllTags, getTagBySlug, getTags } from '../../lib/api/tags';
import { getPopularPosts } from '../../lib/api/posts';
import { getCategories } from '../../lib/api/categories';
import { getAuthors } from '../../lib/api/authors';

import HeadTitle from "../../common/elements/head/HeadTitle";
import HeaderOne from '../../common/elements/header/HeaderOne';
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import SidebarOne from '../../common/components/sidebar/SidebarOne';
import FooterOne from '../../common/elements/footer/FooterOne';

export default function Tag({tag, categories, popularPosts, tags, trendingAuthors}) {

  return (
    <>
      <HeadTitle pageTitle={`${tag.name}`} />
      <HeaderOne postData={[]} />
      <BreadcrumbOne title={tag.name} />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
          <div className="col-lg-8 col-xl-8">
            <PostLayoutTwo dataPost={tag.posts} show="5"/>
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

export async function getStaticProps({ params, preview }) {
  const tag = await getTagBySlug(params.slug, preview)
  const categories = await getCategories(preview)
  const popularPosts = await getPopularPosts(preview)
  const tags = await getTags(preview)
  const trendingAuthors = await getAuthors({perPage: 6, trending: true})
  return {
    props: {
      tag,
      categories,
      popularPosts,
      tags,
      trendingAuthors: trendingAuthors.data
    }
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags()

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          slug: `${tag.slug}`
        },
      }
    }),
    fallback: false,
  }
}