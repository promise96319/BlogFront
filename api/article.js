import request from './request'

export const getArticleList = (params) => {
  return request({
    url: '/api/articles',
    method: 'get',
    params: params
  })
}