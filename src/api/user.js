import request from '../utils/request'

export function getList(url){
     return request({
         methods:'get',
         url
     })
}