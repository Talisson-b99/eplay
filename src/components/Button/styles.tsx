import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-align: none;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-align: none;
  text-decoration: none;
`
