import Link from 'next/link'
import { config } from '@/constants'

const Header: React.FC = (): JSX.Element => {
  const { siteTitle } = config
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <h1>{siteTitle}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
