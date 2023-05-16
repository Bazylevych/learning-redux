import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export default function PostContainerCopy() {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
  return (
    <div>
      <div className="post-list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
}
