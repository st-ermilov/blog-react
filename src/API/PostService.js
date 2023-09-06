import axios from 'axios'

/* Cоздаём класс для хранения методов получения необходимых данных с сервера */
export default class PostService {
    /* Метод для получения списка постов с сервера с условиями для создания пагинации */
    static async getAll(limit = 10, page = 1) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response
        } catch (e) {
            console.log(e)
        }
    }

    /* Метод для получения поста с сервера по его ID для использования этих даннных
    * при формировании страницы отдельного поста  */
    static async getById(id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return response
        } catch (e) {
            console.log(e)
        }
    }


    /* Метод для получения перечня комментариев с сервера для каждого конкретного поста по его ID */
    static async getCommentById(id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            return response
        } catch (e) {
            console.log(e)
        }
    }
}