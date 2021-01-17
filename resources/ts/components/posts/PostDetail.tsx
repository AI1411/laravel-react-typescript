import React, {useEffect, useState} from "react";
import axios from "axios";

const PostDetail = (props: any) => {
    const id = props.match.params.id;
    const [postDetail, setPostDetail] = useState({
        title: "",
        body: "",
        created_at: "",
        category: "",
    });

    useEffect(() => {
        getPostDetail();
    }, []);

    const getPostDetail = async () => {
        const response = await axios.get(`posts/${id}`);

        setPostDetail(response.data.data);
    }

    const prev = () => {
        const prevId: number = parseInt(props.match.params.id) - 1;

        window.location.href = `/posts/${prevId}`;
    }
    const next = () => {
        const nextId: number = parseInt(props.match.params.id) + 1;

        window.location.href = `/posts/${nextId}`;
    }
    return (
        <div>
            <div>
                <div className="container w-full md:max-w-3xl mx-auto pt-20">

                    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

                        <div className="font-sans">
                            <a href={'/posts'} className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">一覧に戻る</a><p></p>
                            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{postDetail.title}</h1>
                            <p className="text-sm md:text-base font-normal text-gray-600">{postDetail.created_at}</p>
                            <p className="py-6">{postDetail.body}</p>
                        </div>
                    </div>

                    <div className="text-base md:text-sm text-gray-500 px-4 py-6">
                        Tags: <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
                    </div>

                    <hr className="border-b-2 border-gray-400 mb-8 mx-4"/>
                    <div className="font-sans flex justify-between content-center px-4 pb-12">
                        <div className="text-left">
                            <p>
                                <a href="#" onClick={() => prev()} className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">&lt; 前へ</a>
                            </p>
                        </div>
                        <div className="text-right">
                            <p>
                                <a href="#" onClick={() => next()} className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline">次へ &gt;</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostDetail;
