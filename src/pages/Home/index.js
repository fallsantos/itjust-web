import React, {useState} from 'react'

import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap'

import Header from '../../components/Header'

import {ContentContainer,Form, LoadingContent, AdsBlock} from './styles'

import ShortenerService from '../../services/shortenerService'

// Os nomes dos componentes funcionais do React devem começar com letras maiúsculas.
const Index = props => {

  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [urlCode, setUrlCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [inputUrl, setInputUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setErrorMessage('')
    //alert(url)
    
    if(!url){
      setLoading(false)
      setErrorMessage('Não podemos encurtar o vazio :P')
    }else {
      try {
        const service = new ShortenerService()
        
        const result = await service.generate({url})
        //alert('url: ', inputUrl)

        setLoading(false)
        setUrlCode(result.code)
      } catch (error) {
        setLoading(false)
        setErrorMessage(`Ops, ${error}`)
      }
    }
  }

  const copyToClipboard = () => {
    const element = inputUrl

    element.select()

    document.execCommand('copy')
  }

  return (
    <Container>
      <Header>
        Encurtador de url
      </Header>
      <ContentContainer>
        <Form onSubmit={handleSubmit}>
          <InputGroup className='mb-3'>
            <FormControl 
              placeholder='Sua url'
              defaultValue=''
              onChange={e => setUrl(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant='primary' type='submit'>Encurtar</Button>
            </InputGroup.Append>
          </InputGroup>
          {loading ? (
            <LoadingContent>
              <Spinner animation='border'/>
            </LoadingContent>
          ) : (
            urlCode && (
              <>
                <InputGroup>
                  <FormControl
                    autoFocus={true}
                    defaultValue={`https://just.tk/${urlCode}`}
                    ref={input => setInputUrl(input)} 
                  />
                  <br/>
                  <InputGroup.Append>
                    <Button variant='outline-secondary' onClick={copyToClipboard}>Copiar</Button>
                  </InputGroup.Append>
                </InputGroup>
                <p className='text-center p-3'>Para aconpanhar as estatísticas, acesse https://itjust.tk/{urlCode}/status</p>
              </>
            )
          )}

          {errorMessage && <Alert variant='danger mt-3'>{errorMessage}</Alert>}
        </Form>
      </ContentContainer>
      <ContentContainer>
        <AdsBlock>Adsense</AdsBlock>
      </ContentContainer>
    </Container>
  )
}

export default Index