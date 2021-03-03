import Head from 'next/head'
import React from 'react'
import { FirstSection } from '../components/section/FirstSection'
import { FourthSection } from '../components/section/FourthSection'
import { Header } from '../components/section/Header'
import ProfileSection from '../components/section/ProfileSection'
import { SecondSection } from '../components/section/SecondSection'
import ThirdSection from '../components/section/ThirdSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patinhas Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ProfileSection />
      <FourthSection />
    </>
  )
}
