import React from 'react';
import styles from '../styles/not_found.module.scss'


/* Компонент "Ошибочной страницы", когда в адресной строке неизвестный адрес/маршрут - осуществляется
* переход сюда */
const NotFound = () => {
    return (
        <div className={styles.not_found}>
            <h1>404:</h1>
            <h1>Page not found</h1>
        </div>
    );
};

export default NotFound;