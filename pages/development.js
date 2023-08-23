import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getHeroPosts, getFeaturedPosts, getPostsByHighLightedCategories } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

import HeadTitle from '../common/elements/head/HeadTitle';
import HeaderOne from '../common/elements/header/HeaderOne';
import SliderOne from '../common/components/slider/SliderOne';
import PostSectionOne from '../common/components/post/PostSectionOne';
import PostSectionTwo from '../common/components/post/PostSectionTwo';

export default function Index({ heroPosts, featuredPosts, postsByHilightedCategories }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <HeadTitle pageTitle="Tech Monday" />
      <HeaderOne postData={heroPosts}/>
      <SliderOne postData={heroPosts}/>
      <PostSectionOne postData={featuredPosts}/>
      <PostSectionTwo postData={postsByHilightedCategories} adBanner={true} />
      {/* <Layout>
        <Head>
          <title>Tech Monday</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              guest={heroPost.guest}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}
    </>
  )
}

export async function getStaticProps({ preview }) {
  const heroPosts = await getHeroPosts(preview)
  const featuredPosts = await getFeaturedPosts(preview)
  const postsByHilightedCategories = await getPostsByHighLightedCategories(preview)

  return {
    props: { heroPosts, featuredPosts, postsByHilightedCategories },
  }
}
