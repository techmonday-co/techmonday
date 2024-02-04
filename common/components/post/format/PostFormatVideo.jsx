import PostAuthor from "./element/PostAuthor";
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";
import PostComment from "./element/PostComment";
import PostTagShare from "./element/PostTagShare";
import PostList from "./content/PostList";
import PostParagraph from "./content/PostParagraph";

const PostFormatVideo = ({ postData, allData, categories, popularPosts}) => {
  function renderPostContent(content) {
    // we are using only the content block at the moment
    return content.root.children.map((block, index) => {
      if (block.type == 'paragraph-element') {
        return <PostParagraph key={`paragraph-${index}`} block={block} />
      } else if (block.type == 'webiny-list') {
        return <PostList key={`list-${index}`} block={block} />
      }
    })
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
              <SidebarTwo dataPost={popularPosts} tagData={postData} categories={categories}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatVideo;
