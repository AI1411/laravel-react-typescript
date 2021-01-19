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
        <main role="main" className="container">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <h3 className="pb-3 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>

                    <div className="blog-post">
                        <h2 className="blog-post-title">{postDetail.title}</h2>
                        <p className="blog-post-meta">{postDetail.created_at}</p>
                        <hr/>
                          <p>{postDetail.body}</p>
                    </div>
                    <nav className="blog-pagination">
                        <a className="btn btn-outline-primary" href="#">古い記事</a>
                        <a className="btn btn-outline-secondary disabled" href="#">新しい記事</a>
                    </nav>

                </div>

                <aside className="col-md-4 blog-sidebar">
                    <div className="p-3 mb-3 bg-light rounded">
                        <h4 className="font-italic">ブログについて</h4>
                        <p className="mb-0">吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも<em>薄暗いじめじめした所で</em>ニャーニャー泣いていた事だけは記憶している。
                        </p>
                    </div>

                    <div className="p-3">
                        <h4 className="font-italic">アーカイブ</h4>
                        <ol className="list-unstyled mb-0">
                            <li><a href="#">2014/03</a></li>
                            <li><a href="#">2014/02</a></li>
                            <li><a href="#">2014/01</a></li>
                            <li><a href="#">2013/12</a></li>
                            <li><a href="#">2013/11</a></li>
                            <li><a href="#">2013/10</a></li>
                            <li><a href="#">2013/09</a></li>
                            <li><a href="#">2013/08</a></li>
                            <li><a href="#">2013/07</a></li>
                            <li><a href="#">2013/06</a></li>
                            <li><a href="#">2013/05</a></li>
                            <li><a href="#">2013/04</a></li>
                        </ol>
                    </div>

                    <div className="p-3">
                        <h4 className="font-italic">SNS</h4>
                        <ol className="list-unstyled">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ol>
                    </div>
                </aside>

            </div>

        </main>
    )
}

export default PostDetail;
