import styles from './DarkGrayCard.module.css';

const DarkGrayCard = ({ children, padding, secondaryBG }) => {
  return (
    <div className={`${styles.container} custom`}>
      {children}
      <style jsx>
        {`
          .custom {
            ${secondaryBG && 'background: linear-gradient(120deg,#eb4f56,#9d66e9);'}

          }
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

