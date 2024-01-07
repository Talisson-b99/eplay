import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;

  padding-top: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    position: absolute;
    background-color: #000;
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    height: 100%;

    z-index: 1;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${Cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin-block: 16px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
