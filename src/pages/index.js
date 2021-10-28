import { connect } from 'react-redux'
import { wrapper } from '../common/store/store';
import { fetchProjects } from '../common/store/projects/action';
import Head from 'next/head';
import Hero from '@modules/Hero/Hero';
import Footer from '@modules/Footer/Footer';
import SectionContainer from '@components/containers/SectionContainer/SectionContainer';
import sectionsData from 'src/common/data/sectionsData';

const Home = () => {
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
      {/*<a target="_blank" rel="noreferrer" href="/assets/pdf/Rogelio_Medina_Resume.pdf"><p>My Resume</p></a>*/}
      <Footer />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  let apiUrl = 'https://www.rogeliomedina.dev/api';
  if (process.env.NODE_ENV !== 'production') apiUrl = 'http://localhost:3000/api'
  const response = await fetch(`${apiUrl}/projects`);
  const { data } = await response.json();
  store.dispatch(fetchProjects(data))
})


export default connect(null, null)(Home)
