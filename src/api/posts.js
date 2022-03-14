import request from '@/utils/request'

export function postList(data) {
  return request({
    url: '/post',
    method: 'get',
    data
  })
}

export function postFind(id) {
  return request({
    url: '/post/' + id,
    method: 'get',
  })
}

export function postCreate(data) {
  return request({
    url: '/post',
    method: 'post',
    data
  })
}

export function postDelete(id) {
  return request({
    url: '/post/' + id,
    method: 'delete',
  })
}