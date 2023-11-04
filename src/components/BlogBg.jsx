import blog from "../assets/images/blog.jpg"

const BlogBg = () => {
    return (
        <div className="bg-container">
        <div>
         
         <h1> Blog Page</h1>
         <button>Read More..</button>
        </div>
        <img src={blog} />
    </div>
    );
};

export default BlogBg;