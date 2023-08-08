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
import StandardPagination from "../components/UI/pagination/StandardPagination";
import styles from '../styles/post_pages.module.scss'

function PostsPage() {
    /* массив постов*/
    const [posts, setPosts] = React.useState([])
    const [filter, setFilter] = React.useState({sort: '', search: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search)

    const [visible, setVisible] = React.useState(false)

    const [pagesCount, setPagesCount] = React.useState(0)
    const [page, setPage] = React.useState(0)
    const [limit, setLimit] = React.useState(10)
    const pagesArray = getPagesArray(pagesCount)

    const [getPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setPagesCount(countPage(totalCount, limit))


    })

    React.useEffect(() => {
        getPosts()
    }, [page]);

    const createPost = (createdPost) => {
        setPosts([...posts, createdPost])
        setVisible(false)
    }
    /* Удаление поста из массива*/
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
            <PostList deletePost={deletePost} postsItems={sortedAndSearchedPosts} title='Posts list'/>
            {isLoading && <StandardLoader/>
            }
            <StandardPagination pagesArray={pagesArray}
                                currentPage={page}
                                setCurrentPage={setPage}
            />
        </div>
    );
}

export default PostsPage;
