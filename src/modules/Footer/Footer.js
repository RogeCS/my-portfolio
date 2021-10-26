import Image from 'next/image';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';

const Footer = () => {
  const logoRatio = 0.3;

	return (
    <footer className={styles.footer}>
      <Link to="title-hero" spy smooth>
        <div className={styles.logo_wrap}>
          Created by{' '}
          <span className={styles.logo}>
            <Image src="/assets/logos/my-portfolio-logo-bk.svg" alt="Rogelio Logo" height={86*logoRatio} width={185*logoRatio} />
          </span>
        </div>
      </Link>
    </footer>
	);
}

export default Footer;

