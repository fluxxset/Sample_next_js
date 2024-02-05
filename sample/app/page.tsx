import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faGlobe } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import the styles


export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Head>
        <title>Your Website Title</title>
      </Head>

      <main>
        <h1 style={{ fontSize: '2em' }}>Keep Building Ossom things dont stop !!!!</h1>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <a href="https://www.youtube.com/@FluxxSet" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" style={{ margin: '0 10px' }} />
          </a>
          <a href="https://github.com/FluxxSet" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ margin: '0 10px' }} />
          </a>
          <a href="https://fluxxset.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{ margin: '0 10px' }} />
          </a>
        </div>
      </main>

      <footer style={{ marginTop: '50px' }}>
        <p>Your footer content goes here.</p>
      </footer>
    </div>
  );
}
