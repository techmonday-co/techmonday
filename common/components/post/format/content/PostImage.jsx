import Image from "next/image";

const PostImage = ({contentBlock}) => {
  return <Image
    src={contentBlock.src}
    alt={contentBlock.src}
    width={100}
    height={100}
  />
}

export default PostImage;