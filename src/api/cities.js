import axios from './index'

export const getCitiesGroup = ({ type }) => {
  return axios.request({
    url: '/v1/cities',
    method: 'get',
    params: {
      type
    }
  })
}
