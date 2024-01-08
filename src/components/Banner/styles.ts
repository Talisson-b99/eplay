import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
  position: relative;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 1;
    position: relative;
  }

  ${TagContainer} {
    position: absolute;
    bottom: 400px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
