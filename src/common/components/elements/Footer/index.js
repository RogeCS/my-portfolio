import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const logoRatio = 0.3;

	return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/RogeCS"
        target="_blank"
        rel="noopener noreferrer"
      >
    		Created by{' '}
      	<span className={styles.logo}>
        	<Image src="/assets/logos/my-portfolio-logo-wh.svg" alt="Rogelio Logo" height={86*logoRatio} width={185*logoRatio} />
      	</span>
    	</a>
    </footer>
	);
}

export default Footer;

