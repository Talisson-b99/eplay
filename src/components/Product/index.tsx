import { Game } from '../../dtos/Game'
import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  game: Game
  infos: string[]
}

const Product = ({ game, infos }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <Card to={`/product/${game.id}`}>
      <img src={game.media.thumbnail} alt={game.name} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>

      <Titulo>{game.name}</Titulo>
      <Tag>{game.details.category}</Tag>
      <Tag>{game.details.system}</Tag>
      <Descricao>{getDescricao(game.description)}</Descricao>
    </Card>
  )
}

export default Product
