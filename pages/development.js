import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
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
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

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
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <HeadTitle pageTitle="Tech Monday" />
      <HeaderOne postData={heroPosts}/>
      <SliderOne postData={heroPosts}/>
      <PostSectionOne postData={featuredPosts}/>
      <PostSectionTwo postData={postsByHilightedCategories} adBanner={true} />
      <CategoryList categories={categories}/>
      <PostSectionFour postData={posts} categories={categories} popularPosts={popularPosts} adBanner={true} />
      <FooterOne categories={categories} tags={tags} authors={authors}/>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const heroPosts = await getHeroPosts(preview)
  const featuredPosts = await getFeaturedPosts(preview)
  const postsByHilightedCategories = await getPostsByHighLightedCategories(preview)
  const categories = await getCategories(preview)
  const posts = await getPosts(preview)
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
