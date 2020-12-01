import baseApi from './api'

class ShortenerService {
  constructor(){
    this.api = baseApi('http://localhost:3005')
    //console.log('Eita: ', this.api)
  }

  async getLink(code){
    const { data } = await this.api.get(`/${code}`)

    return data
  }

  
  async getStatus(code){
    const { data } = await this.api.get(`${code}/status`) 

    return data
  }

  
  async generate(model){
      const { data } = await this.api.post('/', model)

      return data
  }
}

export default ShortenerService