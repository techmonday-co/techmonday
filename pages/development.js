import { useEffect } from 'react';
import { 
  getHeroPosts,
  getFeaturedPosts,
  getPostsByHighLightedCategories,
  getPosts,
  getPopularPosts,
} from '../lib/api/posts'
import {
  getCategories,
} from '../lib/api/categories'
import {
  getTags,
} from '../lib/api/tags'
import {
  getAuthors
} from '../lib/api/authors'

import HeadTitle from '../common/elements/head/HeadTitle';
import HeaderOne from '../common/elements/header/HeaderOne';
import SliderOne from '../common/components/slider/SliderOne';
import PostSectionOne from '../common/components/post/PostSectionOne';
import PostSectionTwo from '../common/components/post/PostSectionTwo';
import PostSectionFour from '../common/components/post/PostSectionFour';
import CategoryList from '../common/components/category/CategoryList';
import FooterOne from '../common/elements/footer/FooterOne';

export default function Index({ 
  heroPosts,
  featuredPosts, 
  postsByHilightedCategories,
  categories,
  posts,
  popularPosts,
  tags,
  authors
 }) {

  useEffect(() => {
    // if (window.adsbygoogle) {
    //   window.adsbygoogle.push({});
    // }
  }, [])

  return (
    <>
      <HeadTitle pageTitle="Tech Monday" />
      <HeaderOne postData={heroPosts}/>
      <SliderOne postData={heroPosts}/>
      <PostSectionOne postData={featuredPosts}/>
      <PostSectionTwo postData={postsByHilightedCategories} adBanner={true} />
      <CategoryList categories={categories}/>
      <PostSectionFour 
        postData={posts.data}
        categories={categories}
        popularPosts={popularPosts}
        adBanner={false}
        contentListLink='/posts'
        contentListLinkText='ดูบทความทั้งหมด'
      />
      <FooterOne categories={categories} tags={tags} authors={authors}/>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const heroPosts = await getHeroPosts(preview)
  const featuredPosts = await getFeaturedPosts(preview)
  const postsByHilightedCategories = await getPostsByHighLightedCategories(preview)
  const categories = await getCategories(preview)
  const posts = await getPosts({perPage: 6})
  const popularPosts = await getPopularPosts(preview)
  const tags = await getTags(preview)
  const authors = await getAuthors(preview)

  return {
    props: {
      heroPosts,
      featuredPosts,
      postsByHilightedCategories,
      categories,
      posts,
      popularPosts,
      tags,
      authors
    },
  }
}
