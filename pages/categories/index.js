import { useEffect } from 'react';
import { 
  getHeroPosts,
  getPosts,
  getPopularPosts,
} from '../../lib/api/posts'
import {
  getCategories,
  getAllCategories,
} from '../../lib/api/categories'
import {
  getTags,
} from '../../lib/api/tags'
import {
  getAuthors
} from '../../lib/api/authors'

import HeadTitle from '../../common/elements/head/HeadTitle';
import HeaderOne from '../../common/elements/header/HeaderOne';
import PostSectionFour from '../../common/components/post/PostSectionFour';
import CategoryList from '../../common/components/category/CategoryList';
import FooterOne from '../../common/elements/footer/FooterOne';

export default function Index({ 
  heroPosts,
  allCategories,
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
      <CategoryList categories={allCategories} showListLink={false} />
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
  const categories = await getCategories(preview)
  const allCategories = await getAllCategories(preview)
  const posts = await getPosts({perPage: 6})
  const popularPosts = await getPopularPosts(preview)
  const tags = await getTags(preview)
  const authors = await getAuthors(preview)

  return {
    props: {
      heroPosts,
      allCategories,
      categories,
      posts,
      popularPosts,
      tags,
      authors
    },
  }
}
