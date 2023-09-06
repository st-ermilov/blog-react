import React from "react";
import '../styles/App.css'
import PostList from "../components/PostList";
import CreatePostForm from "../components/CreatePostForm";
import PostSearchAndFilter from "../components/PostSearchAndFilter";
import StandardModal from "../components/UI/modal/StandardModal";
import StandardButton from "../components/UI/buttons/StandardButton/StandardButton";
import StandardLoader from "../components/UI/loader/StandardLoader";
import {usePosts} from "../components/hooks/usePosts";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import {countPage, getPagesArray} from "../utils/pages";
import styles from '../styles/post_pages.module.scss'
import {useObserver} from "../components/hooks/useObserver";
import PostSelect from "../components/UI/select/PostSelect";

function PostsPage() {
    /* состояние массива ленты постов*/
    const [posts, setPosts] = React.useState([])
    /* состояние сортировки и поиска */
    const [filter, setFilter] = React.useState({sort: '', search: ''})
    /* данные сортировки и поиска по ленте постов */
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search)
    /* элемент для наблюдения при создании "бесконечной ленты постов" */
    const lastElement = React.useRef()
    /* состояние для открытия/закрытия модального окна */
    const [visible, setVisible] = React.useState(false)
    /* состояние для количества страниц постов */
    const [pagesCount, setPagesCount] = React.useState(0)
    /* состояние для нумерации страниц */
    const [page, setPage] = React.useState(0)
    /* состояние для ограничения количества постов на одной странице */
    const [limit, setLimit] = React.useState(10)
    /* массив для дальнейшего рендера строки пагинации */
    const pagesArray = getPagesArray(pagesCount)

    /* получение массива постов с сервера, с формированием указанного количества страниц и количества постов
    * на каждой странице */
    const [getPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setPagesCount(countPage(totalCount, limit))


    })

    /* использование кастомного хука для "бесконечной" ленты с
    остановкой по достижении итогового количества страниц */
    useObserver(lastElement, isLoading, page < pagesCount, () => {
        setPage(page + 1)
    })


    /* загрузка ленты постов при первом запуске приложения */
    React.useEffect(() => {
        getPosts()
    }, [page, limit]);

    /* функция коллбэк для получения данных из дочернего элемента CreatePostForm, добавления полученной
    * информации в существующий массив постов и закрытия модального окна с формой */
    const createPost = (createdPost) => {
        setPosts([...posts, createdPost])
        setVisible(false)
    }
    /* функция для удаление конкретного поста из массива*/
    const deletePost = (post) => {
        setPosts(posts.filter((item) => item.id !== post.id))
    }


    return (
        <div className={styles.post_pages_container}>
            <StandardButton onClick={() => setVisible(true)}
                            style={{margin: '30px 0px', width: '150px'}}>Add
                Post</StandardButton>
            <StandardModal visible={visible} setVisible={setVisible}>
                <CreatePostForm getNewPost={createPost}/>
            </StandardModal>
            <PostSearchAndFilter filter={filter} setFilter={setFilter}/>
            <PostSelect
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue='Number of posts per page'
                /* задаём значения, кототрые укажут по сколько постов будет подгружаться
                * при достижении конца текущего скролла */
                options={[
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'View all posts'}


                ]}
            />
            <PostList deletePost={deletePost} postsItems={sortedAndSearchedPosts} title='Posts list'/>
            <div ref={lastElement}/>
            {isLoading && <StandardLoader/>
            }
        </div>
    );
}

export default PostsPage;
