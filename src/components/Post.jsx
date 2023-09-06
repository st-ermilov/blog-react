import React from 'react';
import styles from '../styles/post.module.scss'
import StandardButton from "./UI/buttons/StandardButton/StandardButton";
import {useNavigate} from "react-router-dom"

/* Компонент, в котором находится шаблон для отображения конкретного поста
* в ленте постов, а также функционал, который позволяет удалить этот пост либо перейти
* на "индивидуальную" страницу этого поста*/
const Post = (props) => {
    const navigate = useNavigate()

    return (
        <div className={styles.post}>
            <div className="post_content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <StandardButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</StandardButton>
            <StandardButton onClick={() => props.deletePost(props.post)}>Delete</StandardButton>
        </div>
    );
};

export default Post;