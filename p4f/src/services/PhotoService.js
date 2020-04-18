import axios from 'axios'

export default class photoService {
  getUserList () {
    const request = axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }

  getAlbumById (id) {
    const request = axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }
}
