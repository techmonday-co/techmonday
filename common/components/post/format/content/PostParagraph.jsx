import PostLink from "./PostLink"

const PostParagraph = ({ block }) => {
  const renderContent = (content, index) => {
    if (content.type === 'text') {
      return <span key={`content-${index}`}>{content.text}</span>
    } else if (content.type === 'image') {
      return <img key={`content-${index}`} src={content.url} alt={content.alt} />
    } else if (content.type === 'link-node') {
      return <PostLink key={`content-${index}`} block={content} />
    } else if (content.type === 'link') {
      return (
        <a key={`content-${index}`} href={content.url} target="_blank" rel="noopener noreferrer">
          {
            content.children.map((child, linkIndex) => {
              return renderContent(child, index + '-link-' + linkIndex)
            })
          }
        </a>
        
      )
    }
  }

  return (
    <p className="post-content">
      {block.children.map((child, index) => {
        return renderContent(child, index)
      })}
    </p>
  )
}

export default PostParagraph;