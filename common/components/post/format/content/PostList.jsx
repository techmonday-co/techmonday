const PostList = ({contentBlock}) => {
  return <ul>
    {contentBlock.data.items.map((item, index) => (
      <li key={`${contentBlock.id}-list-${index}`}>{item}</li>
    ))}
  </ul>
}

export default PostList;