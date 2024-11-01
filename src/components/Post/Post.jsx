import { useLoaderData } from "react-router-dom";

const Post = () => {
    const post=useLoaderData();
    return (
        <div>
            <h2>Post:{post.length}</h2>
        </div>
    );
};

export default Post;