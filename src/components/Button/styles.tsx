import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? Cores.verde : Cores.branca)};
  background-color: ${(props) =>
    props.variant === 'primary' ? Cores.verde : 'transparent'};
  border-radius: 8px;
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
