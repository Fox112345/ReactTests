import React from "react";

const CommentDetail = (props) => {
    let {url} = props
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={url}/>
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    Sam
                </a>
                <div className='metadata'>
                    <span className='date'> Tuday at 5 PM </span>
                </div>
                <div className='text'> Blog post</div>
            </div>
        </div>
    )
}

export default CommentDetail