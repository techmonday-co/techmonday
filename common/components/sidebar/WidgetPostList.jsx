import Link from "next/link";
import Image from "next/image";

const WidgetPostList = ({ postData }) => {
  return (
    <div className="axil-single-widget widget widget_postlist mb--30">
      <h5 className="widget-title">Popular Posts</h5>
      <div className="post-medium-block">
        {postData.slice(0, 3).map((data) => (
          <div className="content-block post-medium mb--20" key={data.slug}>
			  {data.coverImage ? 
            <div className="post-thumbnail">
              <Link href={`/posts/${data.slug}`}>
                  <Image
                    src={data.coverImage}
                    alt={data.title}
                    height={100}
                    width={100}
                    priority={true}
                  />
              </Link>
            </div>
			:""}
            <div className="post-content">
              <h6 className="title">
                <Link href={`/posts/${data.slug}`}>
                  {data.title}
                </Link>
              </h6>
              <div className="post-meta">
                <ul className="post-meta-list">
                  <li>{data.date}</li>
                  <li>{data.post_views}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetPostList;
