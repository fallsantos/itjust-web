import React, {useState, useEffect} from 'react'

import {Container, Spinner} from 'react-bootstrap'

import {StatusContainer,StatusBox,StatusRow,StatusBoxTitle,LoadingContent} from './styles'

import ShortenerService from '../../services/shortenerService'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {parseISO,formatRelative} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Header from '../../components/Header'


const Index = props => {

  const [loading, setLoading] = useState(false)
  const [shortenedUrl, setShortenedUrl] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const getUrlApi = async () => {
    setLoading(true)

    const {code} = props.match.params

    try {
      setLoading(true)

      const service = new ShortenerService()

      const sURL = await service.getStatus(code)

      setShortenedUrl(sURL)

      const parsedDate = parseISO(sURL.updatedAt)
      const currentDate = new Date()// Data atual

      const relativeDate = formatRelative(parsedDate, currentDate, {
        locale: ptBR
      }) 

      // console.log('Shortened Url: ', shortenedUrl)

      setShortenedUrl({...sURL, relativeDate})// Cria uma nova propriedade no objeto
      setLoading(false)
    } catch (error) {
      // setErrorMessage(`Ops, ${error}`)
      setErrorMessage(`Ops, essa url não existe.`)
      setLoading(false)
    }
  }

  useEffect(() => {
    getUrlApi()
  },[
    window.onload
  ])

  if(loading) return (
    <LoadingContent>
       <Spinner animation='border'/>
    </LoadingContent>
  )

  return (
    <Container>
      <Header>Estatísticas:</Header>
      {errorMessage ? (
        <StatusContainer className='text-center'>
          <FontAwesomeIcon 
            size='3x'
            color='#f8d7da'
            icon='exclamation-triangle'
          />
          <p className='p-3 text-center'>{errorMessage}</p>
          <a className='btn btn-primary' href='/'>Encurtar nova url</a>
        </StatusContainer>
      ) : (
        <StatusContainer className='text-center'>
          <p><b>https://just.tk/{shortenedUrl.code}</b></p>
          <p>Redireciona para: <br/> {shortenedUrl.url}</p>
          <StatusRow>
            <StatusBox>
              <b>{shortenedUrl.hits}</b>
              <StatusBoxTitle>Visitas</StatusBoxTitle>
            </StatusBox>

            <StatusBox>
              {shortenedUrl.hits === 0 ? (
                <b>Ainda não tivemos nenhum acesso.</b>
              ) : (
                <>
                  <b>{shortenedUrl.relativeDate}</b>
                  <StatusBoxTitle>Última visita</StatusBoxTitle>
                </>
              )}
            </StatusBox>
          </StatusRow>
          <a className='btn btn-primary' href='/'>Encurtar nova url</a>
        </StatusContainer>
      )}
    </Container>
  )
}

export default Index