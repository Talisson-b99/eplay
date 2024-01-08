import { Game } from '../../models/Game'
import Product from '../Product'
import Section from '../Section'
import { List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <Section title={title} background={background}>
      <List>
        {games?.map((game) => (
          <Product key={game.id} game={game} />
        ))}
      </List>
    </Section>
  )
}

export default ProductsList
