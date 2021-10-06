import Head from 'next/head';
import Hero from '@modules/Hero/Hero';
import Footer from '@modules/Footer/Footer';
import SectionContainer from '@components/containers/SectionContainer/SectionContainer';
import sectionsData from 'src/common/data/sectionsData';

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
        {sectionsData.map(section => (
          <SectionContainer
            key={section.id}
            id={section.id}
            title={section.title}
            subHeader={section.subHeader}
            secondaryBackground={section.secondaryBackground}
          >
            {section.module}
          </SectionContainer>
        ))}
      </main>
      
      <Footer />
    </div>
  )
}

