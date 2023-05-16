import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export default function PostContainerCopy() {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  const [deletePost] = postAPI.useDeletePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <div>
      <div className="post-list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {posts &&
          posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              remove={handleRemove}
              update={handleUpdate}
            />
          ))}
      </div>
    </div>
  );
}
