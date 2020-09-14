import { config } from '@/constants'

interface Props {
  path: string
  alt: string
}

const Thumbnail: React.FC<Props> = ({ path, alt }) => {
  const src = config.images.url + path
  return (
    <div className="thumbnail">
      <img className="thumbanil__image" src={src} alt={alt} />
    </div>
  )
}

export default Thumbnail
