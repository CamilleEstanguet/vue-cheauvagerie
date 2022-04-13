import axios from 'axios'

const api = axios.create({
  baseURL: 'http://lakartxela.iutbayonne.univ-pau.fr/~cestangue001/api-laravelociclette/public/api/',
})

export default api