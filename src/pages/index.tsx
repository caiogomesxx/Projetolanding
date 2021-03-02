import Head from 'next/head'
import React from 'react'
import { FirstSection } from '../components/section/FirstSection'
import { SecondSection } from '../components/section/SecondSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patinhas Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstSection />
      <SecondSection />
    </>
  )
}
