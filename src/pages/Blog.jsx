import AddTodo from "../components/AddTodo";
import BlogBg from "../components/BlogBg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Todos from "../components/Todos";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogBg />
      <Todos />
      <Post />
      <AddTodo />
      <Footer />
    </div>
  );
};

export default Blog;
