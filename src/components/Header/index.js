import React from 'react'

import {HeaderContainer,Logo} from './styles'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Header = props => {
  return(
    <HeaderContainer>
      <FontAwesomeIcon icon="hand-point-up" size='5x' />
      <h1>Just</h1>
      <p>{props.children}</p>
    </HeaderContainer>
  )
}

export default Header