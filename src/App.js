import React from "react";
import Navigation from "./components/UI/nav_bar/Navigation";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    /* состояние для процесса аутентификации  */
    const [isAuth, setIsAuth] = React.useState(false)

    /* проверка на аутентификацию при первом запуске приложения */
    React.useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])
    return (
        <div className='wrapper'>
            <AuthContext.Provider value={{isAuth, setIsAuth}}>
                <Navigation/>
                <AppRouter/>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
