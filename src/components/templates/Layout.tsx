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
      <div className="content">
        <main className="main">{children}</main>
        <div className="sidebar">
          <section className="profile">
            <h2>プロフィール</h2>
          </section>
          <section className="popular">
            <h2>人気記事</h2>
          </section>
          <section className="category">
            <h2>カテゴリ</h2>
          </section>
        </div>
      </div>
      <footer className="footer" />
    </div>
  )
}
