import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import MoreStories from "../../components/more-stories"
import SectionSeparator from "../../components/section-separator"
import Layout from '../../components/layout'
import { getPostBySlug, getAllPostsWithSlug } from '../../lib/api/posts'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

import HeaderOne from '../../common/elements/header/HeaderOne';
import HeadTitle from '../../common/elements/head/HeadTitle';
import PostFormatStandard from '../../common/components/post/format/PostFormatStandard';
import PostFormatVideo from '../../common/components/post/format/PostFormatVideo';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const PostFormatHandler = () => {
    if (post?.format.name == 'video') {
      return <PostFormatVideo postData={post} allData={morePosts}/>
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
    </>
    // <Layout preview={preview}>
    //   <Container>
    //     <Header />
    //     {router.isFallback ? (
    //       <PostTitle>Loading…</PostTitle>
    //     ) : (
    //       <>
    //         <article className="mb-32">
    //           <Head>
    //             <title>
    //               {post.title} | Next.js Blog Example with {CMS_NAME}
    //             </title>
    //             <meta property="og:image" content={post.featuredImage} />
    //           </Head>
    //           <PostHeader
    //             title={post.title}
    //             coverImage={post.featuredImage}
    //             date={post.createdOn}
    //             guest={post.guest}
    //           />
    //           <PostBody content={post.body} />
    //         </article>
    //         <SectionSeparator />
    //         {morePosts.data.length > 0 && <MoreStories posts={morePosts.data} />}
    //       </>
    //     )}
    //   </Container>
    // </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getPostBySlug(context.params.slug, context.preview)
  
  // If no post data for the given slug
  if (!data.post || !data.post.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview: context.preview ?? null,
      post: {
        ...data.post.data,
      },
      morePosts: data.morePosts
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
