import React from "react";

/* Хук для сортировки постов в ленте по алфавиту, принимает в качестве параметров массив данных
* объект для сравнения. Используется мемоизация для предотвращения многократного ре-рендеринга компонента */
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = React.useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

/* Хук для обеспечения процессов сортировки постов в алфавитном порядке, а также
* поиска по массиву постов. Используется мемоизация. */
export const usePosts = (posts, sort, search) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = React.useMemo(() => {
        return sortedPosts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPosts])

    return sortedAndSearchedPosts
}