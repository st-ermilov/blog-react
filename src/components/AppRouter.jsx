import React from 'react';
import Navigation from "./UI/nav_bar/Navigation";
import NotFound from "../pages/NotFound";
import {Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../router/routes";
import Auth from "../pages/Auth";
import {AuthContext} from "../context";

/* Компонент для роутинга в зависимости от состояния isAuth - то есть была ли выполнена
* аутентификация пользователся в системе - в зависимости от этого доступны либо публичные,
* либо приватые маршруты по ресурсу. */
const AppRouter = () => {
    const {isAuth} = React.useContext(AuthContext)
    return (
        isAuth
            ? <Routes>
                <Route element={<Navigation/>}/>
                {privateRoutes.map((item) =>
                    <Route key={item.path} path={item.path} element={item.component} exact={item.exact}/>
                )}
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            : <Routes>
                <Route element={<Navigation/>}/>
                {publicRoutes.map((item) =>
                    <Route key={item.path} path={item.path} element={item.component} exact={item.exact}/>
                )}
                <Route path='*' element={<Auth/>}/>
            </Routes>
    );
};

export default AppRouter;