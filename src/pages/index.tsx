import Head from 'next/head'
import React from 'react'
import ProfileSection from '../components/section/ProfileSection'
import ThirdSection from '../components/section/ThirdSection'
import { FirstSection } from '../components/section/FirstSection'
import { Header } from '../components/section/Header'
import { SecondSection } from '../components/section/SecondSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patinhas Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ProfileSection />
        <Header />
      </main>
    </>
  )
}
