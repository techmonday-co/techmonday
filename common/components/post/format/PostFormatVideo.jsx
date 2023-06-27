import PostAuthor from "./element/PostAuthor";
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";
import PostComment from "./element/PostComment";
import PostTagShare from "./element/PostTagShare";
import PostParagraph from "./content/PostParagraph";
import PostImage from "./content/PostImage";
import PostList from "./content/PostList";

const PostFormatVideo = ({ postData, allData}) => {
  function renderPostContent(content) {
    return (
      <div className="post-content">
        {content.map((contentBlock) => {
          if (contentBlock.type == 'paragraph') {
            return <PostParagraph key={contentBlock.id} contentBlock={contentBlock} />
          } else if (contentBlock.type == 'image') {
            return <PostImage key={contentBlock.id} contentBlock={contentBlock} />
          } else if (contentBlock.type == 'list') {
            return <PostList key={contentBlock.id} contentBlock={contentBlock} />
          }
        })}
      </div>
    )
  }

  return (
    <>
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PostMetaTwo metaData={postData}/>
              <div className="axil-post-details">
                {postData.videoLink ? 
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src={postData.videoLink} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                    </div>
                : ""}
                { renderPostContent(postData?.description) }
                <PostTagShare postTags={postData}/>
                <PostAuthor authors={postData.authors} />
                {/*
                
                <PostComment /> */}
              </div>
            </div>
            <div className="col-lg-4">
              {/* <SidebarTwo dataPost={allData} tagData={postData}/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatVideo;
