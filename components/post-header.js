import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, guest }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={guest.name} picture={guest.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {/* <CoverImage title={title} src={coverImage} height={620} width={1240} /> */}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          <Avatar name={guest.name} picture={guest.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
