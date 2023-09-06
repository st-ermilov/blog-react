import PostPage from "../pages/PostPage";
import About from "../pages/About";
import PostsPage from "../pages/PostsPage";
import Auth from "../pages/Auth";

/* массив маршрутов для авторизованного пользователя */
export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <PostsPage/>, exact: true},
    {path: '/posts/:id', component: <PostPage/>, exact: true}
]
/* массив маршрутов для неавторизованного пользователся */
export const publicRoutes = [
    {path: '/login', component: <Auth/>, exact: true},

]