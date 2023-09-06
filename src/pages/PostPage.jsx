import React from 'react';
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import {useParams} from 'react-router-dom'
import StandardLoader from "../components/UI/loader/StandardLoader";
import styles from '../styles/post_page.module.scss'


/* Компонент страницы конкретного поста */
const PostPage = () => {


    const params = useParams()
    /* состояние страницы поста */
    const [post, setPost] = React.useState({})
    /* состояние комментариев поста */
    const [comment, setComment] = React.useState([])

    /* получения поста из общего массива по ID и его рендер на странице (+анимация загрузки) */
    const [fetchById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    /* получение массива комментариев к конкретному посту по ID и его рендер на странице (+анимация загрузки) */
    const [fetchCommentById, isCommentLoading, errorComment] = useFetching(async (id) => {
        const response = await PostService.getCommentById(id)
        setComment(response.data)
    })

    /* загрузка и рендер поста и комментариев при первом запуске страницы */
    React.useEffect(() => {
        fetchById(params.id)
        fetchCommentById(params.id)
    }, [])

    return (
        <div className={styles.post_page}>
            {isLoading
                ? <StandardLoader/>
                : <div className={styles.post_content}>
                    <h1>{post.id}. {post.title}</h1>
                    <p>{post.body}</p>
                </div>}
            {isCommentLoading
                ? <StandardLoader/>
                : <div className={styles.comments}>
                    {comment.map(obj =>
                        <div style={{margin: '10px 50px'}}>
                            <h5>{obj.email}</h5>
                            <p>{obj.body}</p>
                        </div>
                    )}
                </div>}
        </div>
    );
};

export default PostPage;