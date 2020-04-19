import axios from 'axios'

export default class postService {
  getPostListById (id) {
    const request = axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }
}