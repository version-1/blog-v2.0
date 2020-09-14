import Link from 'next/link'
import Date from 'components/atoms/Date'
import Thumbnail from 'components/atoms/Thumbnail'

interface Props {
  post: Post
}

const Card: React.FC<Props> = ({ post }) => {
  const { language, slug, title, createdAt, thumbnail } = post
  return (
    <div className="card">
      <Thumbnail path={thumbnail} alt={title} />
      <div className="card__content">
        <Link href={`${language}/posts/[id]`} as={`${language}/posts/${slug}`}>
          <h3>
            <a>{title}</a>
          </h3>
        </Link>
        <small>
          <Date value={createdAt} />
        </small>
      </div>
    </div>
  )
}

export default Card
