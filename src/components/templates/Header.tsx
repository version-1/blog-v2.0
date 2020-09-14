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
      <div className="header__navigation">
        <div className="header__navigation_category">
          <ul className="header__navigation-list">
            {new Array(10).fill('').map((item, index) => {
              return (
                <li key={index} className="header__navigation-item">
                  <p>Category {index}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
