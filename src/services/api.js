import axios from 'axios'

const base = (baseURL) => {
  const api = axios.create({
    baseURL,
  })

  return api
}

export default base
