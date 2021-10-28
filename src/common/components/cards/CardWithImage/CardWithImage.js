import Image from 'next/image';
import DarkGrayCard from '../DarkGrayCard/DarkGrayCard';
import CardTitle from '../CardTitle/CardTitle';
import CardDescription from '../CardDescription/CardDescription';
import styles from './CardWithImage.module.css';
const CardWithImage = ({ children, title, }) => {
  return (
    <div>
      <DarkGrayCard secondaryBG padding={64}>
        <div className={styles.container}>
          <div className={styles.content}>
            <CardTitle whiteText>{title}</CardTitle>
            <CardDescription
              whiteText
            >
              {children}
            </CardDescription>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/assets/static/co-working.svg" alt="Rogelio Logo"
              width={20}
              height={20}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </DarkGrayCard>
    </div>
  )
}

export default CardWithImage;

