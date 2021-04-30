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

export function pushPost(data) {
    return request({
        url: '/api/admin/posts',
        method: 'post',
        data
    })
}

export function fetchAdminPostList(query) {
    return request({
        url: '/api/admin/posts',
        method: 'get',
        params: query
    })
}

export function deletePost(query) {
    return request({
        url: '/api/admin/posts/' + query.id,
        method: 'delete',
    })
}

export function fetchPostBySlug(query) {
    return request({
        url: '/api/admin/posts/' + query.slug,
        method: 'get',
    })
}
