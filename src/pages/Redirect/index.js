import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Header from '../../components/Header'

import ShortenerService from '../../services/shortenerService'

import {StatusContainer} from './styles'

const Index = props => {
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getUrlApi = async () => {
    setLoading(true)

    const {code} = props.match.params

    try {
      setLoading(true)

      const service = new ShortenerService()

      const {url} = await service.getLink(code)
      //alert(url)

      window.location = url

      // setLoading(false)

    } catch (error) {
      // setErrorMessage(`Ops, ${error}`)
      setErrorMessage(`Ops, a url solicitada não existe...`)
      setLoading(false)
    }
  }
  useEffect(() => {
    getUrlApi()
  }, [])
 
  return (
    <Container className='text-center'>
      <Header>Seu novo encurtador de urls</Header>
      {errorMessage ? (
        <StatusContainer>
          <FontAwesomeIcon 
            size='3x'
            color='#f8d7da'
            icon='exclamation-triangle'
          />
          <p className='p-3 text-center'>{errorMessage}</p>
          <a className='btn btn-primary' href='/'>Encurtar nova url</a>
        </StatusContainer>
      ) : (
        <p>Redirecionando...</p>
      )}
    </Container>
  )
}

export default Index