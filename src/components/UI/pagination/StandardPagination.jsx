import React from 'react';
import StandardButton from "../buttons/StandardButton/StandardButton";
import styles from './standard_pagaination.module.scss'
import btn from '../buttons/StandardButton/standard_button.module.scss'

/* Компонент с функционалом для формирования строки постраничной навигации/пагинации.
* В зависиости от активной страницы - изменяются CSS-классы активной кнопки страницы */
const StandardPagination = ({pagesArray, currentPage, setCurrentPage}) => {
    return (
        <div className={styles.pagination_container}>
            {pagesArray.map((item) =>
                <StandardButton key={item} onClick={() => setCurrentPage(item)}
                                className={currentPage === item ? btn.active_btn : btn.btn}>{item}
                </StandardButton>)}

        </div>
    );
};

export default StandardPagination;