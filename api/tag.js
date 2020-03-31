import request from './request'

export const getTagList = () => {
  return request({
    url: '/api/tags',
    method: 'get'
  })
}