import Head from 'components/templates/Head'
import Link from 'next/link'

const name = '[Your Name]'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}): JSX.Element {
  return (
    <div className="container">
      <Head />
      <header className="header">
        {home ? (
          <>
            <img src="/images/profile.jpg" alt={name} />
            <h1>{name}</h1>
          </>
        ) : (
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
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
