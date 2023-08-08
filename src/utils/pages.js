export const countPage = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (pagesCount) => {
    let pagesArray = []
    for (let i = 0; i < pagesCount; i++) {
        pagesArray.push(i + 1)
    }
    return pagesArray
}