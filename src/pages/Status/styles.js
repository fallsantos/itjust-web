import styled from 'styled-components'

export const StatusContainer = styled.div`
  display: block;
`

export const StatusRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center !important;
`

export const StatusBox = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: .25rem;
  text-align: center;
  margin: .5rem;
`

export const StatusBoxTitle = styled.div`
  font-weight: 500;
  padding: 0.25rem;
  display: block;
`

export const LoadingContent = styled.div`
  flex: 0 0 80%;
  display: flex;
  justify-content: center !important;
  align-items: center;
  width: 100%;
  padding: 2rem;
  height: inherit;
`