import Link from 'next/link'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <>
        <Link href="/">
          <a>
            <img src="/images/profile.jpg" alt={name} />
          </a>
        </Link>
        <h2>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </h2>
      </>
    </header>
  )
}

export default Header
