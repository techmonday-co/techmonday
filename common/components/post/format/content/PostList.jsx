const PostList = ({block}) => {
  
  const renderListItem = (item) => {
    console.log(item)
    return (
      <li>
        {item.children.map((child, index) => {
          if (child.type === 'text') {
            return <span key={`content-${index}`}>{child.text}</span>
          }
        })}
      </li>
    )
  }

  return <ul>
    {block.children.map((child, index) => {
      if (child.type === 'webiny-listitem') {
        return renderListItem(child)
      }
    })}
  </ul>
}

export default PostList;