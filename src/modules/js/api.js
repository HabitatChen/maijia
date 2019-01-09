let url = {
  hotLists: '/index/hotLists'
}
// 开发环境和真实环境到切换
let host = 'http://www.sosoapi.com/pass/mock/13700/index/hotLists'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
