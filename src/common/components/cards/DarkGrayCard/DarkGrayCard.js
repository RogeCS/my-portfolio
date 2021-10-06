import styles from './DarkGrayCard.module.css';

const DarkGrayCard = ({ children, padding }) => {
  return (
    <div className={`${styles.container} custom`}>
      {children}
      <style jsx>
        {`
          @media (min-width: 850px) {
            .custom {
              padding: ${padding}px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default DarkGrayCard;

