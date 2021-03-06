import Head from 'next/head'
import React, { useEffect, useRef } from 'react';
import Layout from './layout';

export default function Home() {
 

    return (
      <Layout>
        <Head>
          <title>Animations - route2</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section className='section'>
            <h1>Links</h1>
            <a href="/" className='link --animated'>Dit is een link</a><br></br>
          </section>
        </main>
      </Layout>
    )
}