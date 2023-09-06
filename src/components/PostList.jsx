import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

/* Компонент, в котором создаётся лента постов, а также находится функционал для
* создания анимации (конкрентнее - transition) добавления/удаления поста из ленты */
const PostList = ({postsItems, title, deletePost}) => {

    if (!postsItems.length) {
        return <h1 style={{textAlign: 'center', marginTop: '20px'}}>Posts not found...</h1>
    }
    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}>{title}</h1>
            <TransitionGroup>
                {postsItems.map((postItem) =>
                    <CSSTransition key={postItem.id} timeout={400} classNames='post'>
                        <Post
                            deletePost={deletePost}
                            post={postItem}/>
                    </CSSTransition>)}
            </TransitionGroup>
        </>
    );
};

export default PostList;