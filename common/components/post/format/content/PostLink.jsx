const PostLink = ({block}) => {
  const renderContent = (block) => {
    return block.children.map((child, index) => {
      if (child.type === 'text') {
        return <span key={`content-${index}`}>{child.text}</span>
      } else if (child.type === 'image') {
        return <img key={`content-${index}`} src={child.url} alt={child.alt} />
      }
    })
  }

  return <a href={block.url} target="_blank" rel="noopener noreferrer">{renderContent(block)}</a>
}

export default PostLink;
