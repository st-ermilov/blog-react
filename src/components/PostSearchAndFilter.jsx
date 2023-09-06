import React from 'react';
import StandardInput from "./UI/inputs/input/StandardInput";
import PostSelect from "./UI/select/PostSelect";
import styles from '../styles/post_search_and_filter.module.scss'

/* Компонент, в котором находится функционал для осуществления поиска по массиву постов
* и сортировки массива в алфавитном порядке (по названию/по тексту поста) */
const PostSearchAndFilter = ({filter, setFilter}) => {
    return (
        <div className={styles.search_container}>
            <StandardInput value={filter.search}
                           onChange={(e) => setFilter({...filter, search: e.target.value})}
                           placeholder='Search post...'/>
            <PostSelect
                value={filter.sort}
                onChange={(sorted) => setFilter({...filter, sort: sorted})}
                defaultValue='Sorted'
                options={[{value: 'title', name: 'by title'}, {value: 'body', name: 'by text'}]}/>
        </div>
    );
};

export default PostSearchAndFilter;