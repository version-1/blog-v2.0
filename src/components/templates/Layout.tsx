import Head from 'components/templates/Head'
import Header from 'components/templates/Header'

export default function Layout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="container">
      <Head />
      <Header />
      <main className="main">{children}</main>
      <footer className="footer" />
    </div>
  )
}
