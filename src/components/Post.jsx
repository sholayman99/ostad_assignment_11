import { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.org/posts");
      let result = await res.json();
      setPosts(result);
    })();
  }, []);

  return (
    <div style={{padding:"50px"}} >
        <h2>All Posts</h2>
      <table>
        {posts.slice(0,15).map((post, index) => (
          <tbody key={index}>
            <id>{post.id} </id>
            <td>{post.slug} </td>
            <td>{post.title} </td>
            <td>
                <img src={post.url} />
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Post;
