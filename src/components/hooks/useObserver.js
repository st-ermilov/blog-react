import React from "react";

/* Хук для создания "бесконечной" ленты контента, в основе которого лежит отслеживание положения
"наблюдаемого" объекта (видно или нет его на дисплее). В качестве параметров принимает отслеживаемы объект,
состояние загрузки с анимацией, условие для остановки и непосредственно функицю, которая вызывает изменения ленты*/
export const useObserver = (ref, isLoading, canLoad, callback) => {

    const observer = React.useRef()
    React.useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        const cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading])

}