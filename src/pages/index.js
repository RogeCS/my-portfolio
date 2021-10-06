import Head from 'next/head';
import Hero from '@modules/Hero/Hero';
import AboutMe from '@modules/AboutMe';
import Footer from '@elements/Footer';
import MyProjects from '@modules/MyProjects';
import projectCardData from '@mocks/data/projectCardData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rogelio Medina</title>
        <meta name="description" content="I am a junior frontend developer who uses React, NextJS, HTML and CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero /> 
        <AboutMe />
        <MyProjects projects={projectCardData}/>
      </main>
      <Footer />
    </div>
  )
}

