import { Game } from '../../dtos/Game'
import Product from '../Product'
import Section from '../Section'
import { List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
}

export const formataPreco = (preco = 0) => {
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)

  return precoFormatado
}

export const getGameTags = (game: Game) => {
  const tags = []

  if (game.release_date) {
    tags.push(game.release_date)
  }

  if (game.prices.discount) {
    tags.push(`${game.prices.discount}%`)
  }

  if (game.prices.current) {
    tags.push(formataPreco(game.prices.current))
  }

  return tags
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <Section title={title} background={background}>
      <List>
        {games?.map((game) => (
          <li key={game.id}>
            <Product game={game} infos={getGameTags(game)} />
          </li>
        ))}
      </List>
    </Section>
  )
}

export default ProductsList
