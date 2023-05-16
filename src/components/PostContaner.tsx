import { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export default function PostContainer() {
  const [limit, setLimit] = useState<number>(10);

  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000,
  });

  useEffect(() => {
    setTimeout(() => {
      setLimit(5);
    }, 5000);
  }, []);

  return (
    <div>
      <div className="post-list">
        {/* <button onClick={() => refetch()}>REFETCH</button> */}
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
}
