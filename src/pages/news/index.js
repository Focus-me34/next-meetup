import Link from "next/link";

const News = () => {
  return (
    <>
      <h2>NEWS PAGE (index)</h2>
      <ul>
        <li>
          <Link href="/news/next-js-great-framework">
            NextJS is a great framweork
          </Link>
        </li>

        <li>
          <Link href="/news/firebase-with-nextjs">
            Firebase with NextJS: Futuristic approach
          </Link>
        </li>

        <li>
          <Link href="/news/redux-with-nextjs">
            Reaching perfection: Redux with NextJS and Firebase
          </Link>
        </li>
      </ul>

      <br />
      <br />
      <br />
      <Link href="/">
        Homepage
      </Link>
    </>
  );
}

export default News;
