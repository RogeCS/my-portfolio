import Link from 'next/link';

const Project = () => {
  return (
    <div className="container">
      <div className="text_wrapper">
      <h1>Site on construction</h1>
      <Link href="/">
        <a>
          go back
        </a>
      </Link>
      </div>
      <style jsx>
        {`
        .container{
          display: grid;
          width: 100vw;
          height: 100vh;
          place-items: center;
        }

        .container h1 {
          margin: 0;
          font-size: min(10vh, 10vw);
          font-weight: 200;
          text-align: center;
        }

        .container a {
          font-size: min(5vh, 5vw);
          color: var(--blue);
        }

        .container a:hover {
          text-decoration: underline;
        }

        .text_wrapper {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          align-items: center;
        }
        `}
      </style>
    </div>
  )
}

export default Project;
