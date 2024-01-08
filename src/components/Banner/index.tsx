import { useEffect, useState } from 'react'

import { Imagem, Precos, Titulo } from './styles'
import { Game } from '../../dtos/Game'
import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((response) => response.json())
      .then((response) => setGame(response))
  }, [])

  if (!game) {
    return null
  }
  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br /> por apenas{' '}
            {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar está oferta"
          to={`/product/${game.id}`}
        >
          Apreveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
