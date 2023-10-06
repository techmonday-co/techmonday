const PostText = ({contentBlock}) => {
  return (
    <div
      className="post-details-content"
      dangerouslySetInnerHTML={{ __html: contentBlock.text }}
    ></div>
  )
}

export default PostText;