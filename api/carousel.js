import request from './request'

export const getCarouselList = () => {
  return request({
    url: '/api/carousels',
    method: 'get'
  })
}