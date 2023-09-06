import React from 'react';

import StandardInput from "./UI/inputs/input/StandardInput";
import StandardTextArea from "./UI/inputs/textarea/StandardTextArea";
import StandardButton from "./UI/buttons/StandardButton/StandardButton";

import styles from "../styles/create_post_form.module.scss"

/* Компонент, в котором находится функционал для создания и добавления в массив нового поста */
const CreatePostForm = ({getNewPost}) => {

    /* состояния для создания шаблона новго поста */
    const [newPost, setNewPost] = React.useState({title: '', body: ''})


    /* коллбэк-функция для возврата данных в виде созданного поста в родительский компонент PostsPage
    * и добалвения его в общий массив постов*/
    const addNewPost = (e) => {
        e.preventDefault()
        const createdPost = {
            ...newPost, id: Date.now()
        }
        getNewPost(createdPost)
        setNewPost({title: '', body: ''})
    }

    return (
        <form className={styles.form}>
            <StandardInput value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                           type="text"
                           placeholder='Enter post title...'/>
            <StandardTextArea value={newPost.body} onChange={(e) => setNewPost({...newPost, body: e.target.value})}
                              rows="5"
                              placeholder='Enter post text...'/>
            <StandardButton onClick={addNewPost}>Create post</StandardButton>
        </form>
    );
};

export default CreatePostForm;