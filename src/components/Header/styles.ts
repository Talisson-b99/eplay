import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBAR = styled.div`
  background-color: ${Cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${Cores.branca};
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  margin-left: auto;

  img {
    margin-left: 16px;
  }
`
