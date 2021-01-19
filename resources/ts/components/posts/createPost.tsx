import React, {SyntheticEvent, useEffect, useState} from "react";
import './css/form.css';
import axios from "axios";
import {useForm} from "react-hook-form";
import {Redirect} from 'react-router-dom';

interface Post {
    title: string;
    body: string;
    category_id: number;
}

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category_id, setCategoryId] = useState('');
    const {register, handleSubmit, errors, reset} = useForm<Post>();
    const [isRedirect, setIsRedirect] = useState(false);

    useEffect(() => {
        postBlog;
    }, []);

    const postBlog = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('posts', {
            title: title,
            body: body,
            category_id: category_id,
        }).then(() => {
            location.href = '/posts';
        });

        setIsRedirect(true);
    }

    return (
        <div className="flex flex-col flex-1">
            <form onSubmit={postBlog}>
                <main className="h-full pb-16 overflow-y-auto">
                    <div className="container px-6 mx-auto grid">
                        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                            Elements
                        </h4>
                        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Title</span>
                                <input
                                    type="text"
                                    onChange={e => setTitle(e.target.value)}
                                    ref={register({
                                        required: 'タイトルは必ず入力して下さい'
                                    })}
                                    className={'error block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input'}
                                    placeholder="Jane Doe"/>
                            </label>

                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Category</span>
                                <input
                                    onChange={e => setCategoryId(e.target.value)}
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="Jane Doe"/>
                            </label>

                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">body</span>
                                <textarea
                                    onChange={e => setBody(e.target.value)}
                                    rows={10}
                                    className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                    placeholder="Enter some long form content."/>
                            </label>
                            <button
                                className="flex items-center justify-between p-4 mb-3 mt-3 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                                <div className="flex items-center">
                                    <span className="text-center">投稿する</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </main>
            </form>
        </div>
    );
}

export default CreatePost;
