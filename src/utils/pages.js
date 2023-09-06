/* функция для расчёта количества страниц в приложении на основании параметров массива */
export const countPage = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

/* функция для формирования массива для строки пагинации */
export const getPagesArray = (pagesCount) => {
    let pagesArray = []
    for (let i = 0; i < pagesCount; i++) {
        pagesArray.push(i + 1)
    }
    return pagesArray
}