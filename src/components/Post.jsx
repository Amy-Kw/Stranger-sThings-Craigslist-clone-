//this the section where you create the item you want to sell and post
import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API/index";

export default function allPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  // const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function getAllPosts() {
      const APIResponse = await fetchAllPosts();
      if (APIResponse.success) {
        setPosts(APIResponse.data.posts);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPosts();
  }, []);

  // const playersToDisplay = searchParam
  //   ? players.filter((player) =>
  //       player.name.toLowerCase().includes(searchParam)
  //     )
  //   : players;
  return (
    <div id="all-posts-gallery">
      {posts.map((post) => {
        return (
          <>
            <h3 id="post-component"> {post.title} </h3>
            <p> {post.description} </p>
            <p> {post.price} </p>
          </>
        );
      })}
    </div>
  );
}
