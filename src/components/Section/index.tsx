import { ReactNode } from 'react'
import { Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: ReactNode
}

const Section = ({ title, background, children }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        {children}
      </div>
    </Container>
  )
}

export default Section
