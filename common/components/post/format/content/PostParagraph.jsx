import PostLink from "./PostLink"

const PostParagraph = ({ block }) => {
  return (
    <p className="post-content">
      {block.children.map((child, index) => {
        if (child.type === 'text') {
          return <span key={`content-${index}`}>{child.text}</span>
        } else if (child.type === 'image') {
          return <img key={`content-${index}`} src={child.url} alt={child.alt} />
        } else if (child.type === 'link-node') {
          return <PostLink key={`content-${index}`} block={child} />
        }
      })}
    </p>
  )
}

export default PostParagraph;