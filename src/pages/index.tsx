import Head from 'next/head'
import React from 'react'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Patinhas Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Patinhas Bank</h1>
      </main>
    </div>
  )
}
