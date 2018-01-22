import http from './public.js'

export const getUserInfo = (params) => {
  return http.fetchPost('/User/test', params)
}
