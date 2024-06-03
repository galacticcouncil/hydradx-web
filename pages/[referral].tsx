import Head from 'next/head'
import { useRouter } from "next/router"
import { useEffect } from "react"

const PAGE_TITLE = 'You are invited to a pool party'
const PAGE_DESCRIPTION = 'Start trading on HydraDX with cashback'
const PAGE_CANONICAL = 'https://hydration.net'
const PAGE_IMAGE = 'https://hydration.net/assets/meta-referrals-image.jpg?v2'

const Referral = () => {
  const { query, push, isReady } = useRouter()

  useEffect(() => {
    if (!isReady) return

    if (query.referral) {
      push(`https://app.hydration.net/trade/swap?referral=${query.referral}`)
    } else {
      push('/')
    }
  }, [isReady, push, query.referral])

  return (
    <Head>
      <title>{PAGE_TITLE}</title>
      <meta name="title" content={PAGE_TITLE} />
      <meta name="description" content={PAGE_DESCRIPTION} />
      <link rel="canonical" href={PAGE_CANONICAL} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={PAGE_CANONICAL} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:image" content={PAGE_IMAGE} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={PAGE_CANONICAL} />
      <meta property="twitter:title" content={PAGE_TITLE} />
      <meta property="twitter:description" content={PAGE_DESCRIPTION} />
      <meta property="twitter:image" content={PAGE_IMAGE} />
    </Head>
  )
}

export default Referral
