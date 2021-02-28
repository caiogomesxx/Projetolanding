import Head from 'next/head'
import React from 'react'
import ProfileSection from '../components/section/ProfileSection'
import ThirdSection from '../components/section/ThirdSection'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Patinhas Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThirdSection />
        <ProfileSection />
      </main>
    </>
  )
}
