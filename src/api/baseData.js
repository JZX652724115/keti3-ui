import request from '@/api/https.js'

export function getAllPlants() {
  return request({
     url: '/jiexiantu/plants/all',
     method: 'get'
  })
}


export function getAllLines() {
  return request({
     url: '/jiexiantu/coordLines/all',
     method: 'get'
  })
}