import React from "react";

const PostView = (props: any) => {
    const truncate = (str: string, len: number) => {
        return str.length <= len ? str: (str.substr(0, len) + "...")
    }
    return (
        <div className="card mr-4 mb-4 shadow-sm">
            <img className="card-img-top"
                 data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                 alt="Thumbnail [100%x225]"
                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17715b15616%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17715b15616%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                 data-holder-rendered="true"/>
            <div className="card-body">
                <p className="card-text">{props.post.title}</p>
                <p className="card-text">{truncate(props.post.body, 20)}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary"><a href={`/posts/${props.post.id}`}>見る</a>
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary"><a href="">編集</a>
                        </button>
                    </div>
                    <small className="text-muted">{props.post.created_at}</small>
                </div>
            </div>
        </div>
    )
}

export default PostView;
