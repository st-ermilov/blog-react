import React from 'react';
import StandardInput from "../components/UI/inputs/input/StandardInput";
import StandardButton from "../components/UI/buttons/StandardButton/StandardButton";
import styles from '../styles/auth.module.scss'
import {AuthContext} from "../context";

/* Компонент страницы аутентификации пользователся */
const Auth = () => {
    /* извлекаем состояние из контекста */
    const {setIsAuth} = React.useContext(AuthContext)

    /* Функция "входа в систему" - изменяет состояние isAuth и добалвет в localStorage необходимую запись
    * об успешной аутентификации, для предотвращения выхода пользователся из состояния "опознанного"
    * при обновлении приложения */
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className={styles.auth_container}>
            <h1>Welcome, traveler...</h1>
            <form className={styles.login_form} onSubmit={login}>
                <StandardInput type="text" placeholder='Login...'/>
                <StandardInput type='password' placeholder='Password...'/>
                <StandardButton>Enter</StandardButton>
            </form>
        </div>
    );
};

export default Auth;