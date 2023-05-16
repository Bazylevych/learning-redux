import { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

export default function PostContainer() {
  const [limit, setLimit] = useState<number>(100);
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000,
  });

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(5);
    // }, 5000);
  }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className="post-list">
        <button onClick={handleCreate}>Add Post</button>
        {/* <button onClick={() => refetch()}>REFETCH</button> */}
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
