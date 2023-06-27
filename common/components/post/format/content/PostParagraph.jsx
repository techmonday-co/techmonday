const PostParagraph = ({contentBlock}) => {
  return (
    <div
      className="post-details-content"
      dangerouslySetInnerHTML={{ __html: contentBlock.data.text }}
    ></div>
  )
}

export default PostParagraph;