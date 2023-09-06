import React from 'react';
import styles from './navigation.module.scss'
import {Link} from 'react-router-dom'
import StandardButton from "../buttons/StandardButton/StandardButton";
import {AuthContext} from "../../../context";

/* Компонент навигационной панели с ссылками на доступные страницы и элементом, меняюшим состояние
* isAuth с "выходом ползьзователя" из приватного роутинга */
const Navigation = () => {
    const {isAuth, setIsAuth} = React.useContext(AuthContext)
    /* Функция, меняющая состояния isAuth и изменяющая localStorage */
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation_btns}>
                <Link className={styles.navigation_btn} to='/about'>About</Link>
                <Link className={styles.navigation_btn} to='/posts'>Posts</Link>
            </div>
            <StandardButton onClick={logout}>Log Out</StandardButton>
        </div>
    );
};

export default Navigation;