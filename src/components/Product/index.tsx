import { Game } from '../../models/Game'
import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  game: Game
}

const Product = ({
  game: { category, description, image, infos, system, title }
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{description}</Descricao>
    </Card>
  )
}

export default Product
