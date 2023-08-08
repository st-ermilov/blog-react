import React from 'react';
import StandardInput from "../components/UI/inputs/input/StandardInput";
import StandardButton from "../components/UI/buttons/StandardButton/StandardButton";
import styles from '../styles/auth.module.scss'
import {AuthContext} from "../context";

const Auth = () => {
    const {setIsAuth} = React.useContext(AuthContext)
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