import request from '@/utils/request'

export function fetchPostList(query) {
    return request({
        url: '/api/posts',
        method: 'get',
        params: query
    })
}

export function fetchCategoryList(query) {
    return request({
        url: '/api/categories',
        method: 'get',
        params: query
    })
}

export function fetchPostDetails(query) {
    return request({
        url: '/api/posts/'+ query.slug,
        method: 'get',
    })
}