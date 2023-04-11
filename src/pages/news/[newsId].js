import { useRouter } from "next/router";
// import { useState } from "react";

const NewsDetails = () => {
  const router = useRouter();
  // const [id, setId] = useState(router.query.newsId)
  const newsId = router.query.newsId;

  console.log(newsId);

  return (
    <h2>This is the news details page (SHOW PAGE)</h2>
  );
}

export default NewsDetails
