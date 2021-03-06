import { config } from '@/constants'
import Head from 'next/head'

interface Props {
  language?: Language
}

const HeadComponent: React.FC<Props> = ({ language = 'ja' }) => {
  const { siteTitle } = config
  const data = config[language]
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{siteTitle}</title>
      <meta name="description" content={data.description} />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default HeadComponent
