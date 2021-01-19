import React, {useEffect, useState} from "react";
import axios from "axios";
import PostView from "./PostView";

axios.defaults.baseURL = 'https://sakuton.test/api';

interface Post {
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC<Post> = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            title: "",
            body: "",
        }
    ]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get('posts');

        setPosts(response.data.data);
    }
    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row">
                    {posts.map((post) =>
                        <PostView post={post}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Posts;
