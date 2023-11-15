import AddBanner from "../ad-banner/AddBanner";
import SidebarOne from "../sidebar/SidebarOne";
import PostLayoutTwo from "./layout/PostLayoutTwo";

const PostSectionFour = ({postData, popularPosts, categories, adBanner}) => {
  return (
    <div className="axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-8">
            { adBanner === true ? 
              <ins className="adsbygoogle"
                style={{display: "block", marginBottom: '1rem'}}
                data-ad-client="ca-pub-5063470115459401"
                data-ad-slot="6814432190"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              : ""
            }
            <PostLayoutTwo dataPost={postData}/>
          </div>
          <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
            <SidebarOne dataPost={popularPosts} categories={categories}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionFour;
