import React, {useEffect, useState} from "react";
import axios from "axios";
import PostView from "./PostView";
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';

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
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async (page: number = 1) => {
        const response = await axios.get(`posts?page=${page}`);
        const data = response.data.data;

        if (data.length < 1) {
            setHasMore(false);
            return;
        }

        setPosts([...posts, ...data]);
    }
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={getPosts}
                    hasMore={true}
                    loader={<div className="loader text-center" key={0}>読み込み中 ...</div>}
                >
                    <div className="row">
                        {posts.map((post) =>
                            <PostView post={post}/>
                        )}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Posts;
