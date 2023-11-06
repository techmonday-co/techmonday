import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import MoreStories from "../../components/more-stories"
import SectionSeparator from "../../components/section-separator"
import Layout from '../../components/layout'
import { getPostBySlug, getAllPostsWithSlug, getPopularPosts } from '../../lib/api/posts'
import { getAuthors } from '../../lib/api/authors';
import { getCategories } from '../../lib/api/categories';
import { getTags } from '../../lib/api/tags';
import getPageViews from '../../lib/api/pageViews'

import HeaderOne from '../../common/elements/header/HeaderOne';
import HeadTitle from '../../common/elements/head/HeadTitle';
import PostFormatStandard from '../../common/components/post/format/PostFormatStandard';
import PostFormatVideo from '../../common/components/post/format/PostFormatVideo';
import FooterOne from '../../common/elements/footer/FooterOne';


export default function Post({ post, morePosts, preview, categories, popularPosts, authors, tags }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const PostFormatHandler = () => {
    if (post?.format.name == 'video') {
      return  <PostFormatVideo 
                postData={post} 
                allData={morePosts} 
                categories={categories} 
                popularPosts={popularPosts}
              />
    } else {
      return <></>
      // return <PostFormatStandard postData={post} allData={morePosts}/>
    }
  }

  return (
    <>
      <HeaderOne postData={morePosts} pClass="header-light header-sticky header-with-shadow"/>
      <HeadTitle pageTitle={post?.title} />
      <PostFormatHandler />
      <FooterOne categories={categories} tags={tags} authors={authors}/>
    </>
  )
}

export async function getStaticProps({params, preview}) {
  const data = await getPostBySlug(params.slug, preview)
  
  // If no post data for the given slug
  if (!data.post || !data.post.data) {
    return {
      notFound: true,
    };
  }

  const categories = await getCategories(preview)
  const popularPosts = await getPopularPosts(preview)
  const tags = await getTags(preview)
  const authors = await getAuthors(preview)
  const pageViews = await getPageViews(`/posts/${params.slug}`)

  return {
    props: {
      preview: preview ?? null,
      post: {
        ...data.post.data,
        ...pageViews
      },
      morePosts: data.morePosts,
      categories,
      popularPosts,
      tags,
      authors
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: `${post.slug}`,
        },
      }
    }),
    fallback: true,
  }
}
