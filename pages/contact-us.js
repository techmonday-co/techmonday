import { getAuthors } from '../lib/api/authors';
import { getCategories } from '../lib/api/categories';
import { getHeroPosts, getPopularPosts } from '../lib/api/posts';
import { getTags } from '../lib/api/tags';


import HeadTitle from '../common/elements/head/HeadTitle';
import HeaderOne from '../common/elements/header/HeaderOne';
import BreadcrumbTwo from '../common/elements/breadcrumb/breadcrumbTwo';
import WidgetCategory from '../common/components/sidebar/WidgetCategory';
import WidgetPostList from '../common/components/sidebar/WidgetPostList';
import WidgetSocialShare from '../common/components/sidebar/WidgetSocialShare';
import FooterOne from '../common/elements/footer/FooterOne';

const About = ({
  heroPosts,
  popularPosts,
  categories,
  tags,
  trendingAuthors
}) => {
  return (
    <>
      <HeadTitle
        title="Contact Us | Tech Monday"
        description="Tech Monday เรามุ่งมั่นที่จะเชื่อมโยงผู้เชี่ยวชาญและผู้นำความคิดในอุตสาหกรรมเทคโนโลยี เราเป็นแพลตฟอร์มสื่อที่ให้บริการข้อมูลและความรู้เกี่ยวกับเทคโนโลยีล่าสุด นวัตกรรม และเรื่องราวขององค์กรเทคโนโลยีชั้นนำ"
        image="url('images/bg/contact-us.jpg')"
      />
      <HeaderOne postData={heroPosts} pClass="header-light header-sticky header-with-shadow" />
      <BreadcrumbTwo 
        title= "Contact Us" 
        paragraph="Wherever &amp; whenever you need us. We are here for you – contact us for all your support needs.<br /> be it technical, general queries or information support."
        bgImae="url('images/bg/contact-us.jpg')"
        />
      <div className="axil-post-list-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              {/* Start About Area  */}
              <div className="axil-about-us">
                <div className="inner">
                  <h2>ยินดีต้อนรับสู่หน้าติดต่อเราของ Tech Monday</h2>
                  <p>Tech Monday เรามุ่งมั่นที่จะเชื่อมโยงผู้เชี่ยวชาญและผู้นำความคิดในอุตสาหกรรมเทคโนโลยี เราเป็นแพลตฟอร์มสื่อที่ให้บริการข้อมูลและความรู้เกี่ยวกับเทคโนโลยีล่าสุด นวัตกรรม และเรื่องราวขององค์กรเทคโนโลยีชั้นนำ</p>
                  <p>หากคุณมีคำถาม ข้อเสนอแนะ หรือต้องการเชิญผู้เชี่ยวชาญมาร่วมพูดคุยในรายการพอดคาสต์ของเรา เรายินดีที่จะได้ยินจากคุณ!</p>
                  <p>กรุณาส่งอีเมลมาที่ <a href="mailto:roonglit@technmonday.co" className='primary-color'>roonglit@techmonday.co</a> เพื่อเข้าถึงทีมของเรา ทีมงาน Tech Monday จะติดต่อกลับไปโดยเร็วที่สุด</p>
                  <p>ขอบคุณที่สนใจและสนับสนุน Tech Monday!</p>
                </div>
                  {/* <FormOne /> */}
              </div>
              {/* End About Area  */}
            </div>

            <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
              <div className="sidebar-inner">
                <WidgetCategory categories={categories}/>
                <WidgetPostList postData={popularPosts}/>
                <WidgetSocialShare />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne categories={categories} tags={tags} authors={trendingAuthors}/>
    </>
  );
};

export async function getStaticProps({ preview }) {
  const heroPosts = await getHeroPosts(preview)
  const popularPosts = await getPopularPosts(preview)
  const categories = await getCategories(preview)
  const tags = await getTags(preview)
  const trendingAuthors = await getAuthors({perPage: 6, trending: true})

  return {
    props: {
      heroPosts,
      popularPosts,
      categories,
      tags,
      trendingAuthors
    },
  };
}

export default About;
