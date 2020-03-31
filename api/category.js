import request from './request'

export const getCategoryList = () => {
  return request({
    url: '/api/categories',
    method: 'get'
  })
}