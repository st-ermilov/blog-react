import React from "react";


/* Создаём хук для выполнения загрузки данных с сервера с индикацией процесса загрузки.
* Принимает в качестве параметров изменения состояния анимации загрузки, "состояние ошибки"
* и асинхронную функцию получения данных*/
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}