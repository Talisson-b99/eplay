import { Game } from '../../models/Game'
import Product from '../Product'
import { Container, List, Titulo } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        <List>
          {games?.map((game) => (
            <Product key={game.id} game={game} />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
