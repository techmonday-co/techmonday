import Image from "next/image";

const PostImage = ({contentBlock}) => {
  return <Image
    src={contentBlock.data.file}
    alt={contentBlock.data.file}
    width={100}
    height={100}
  />
}

export default PostImage;