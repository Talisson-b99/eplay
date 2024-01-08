import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import resident from '../../assets/resident.png'
import { useEffect, useState } from 'react'
import { Game } from '../../dtos/Game'

const Product = () => {
  const [game, setGame] = useState<Game>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((response) => response.json())
      .then((response) => setGame(response))
  }, [id])

  if (!game) {
    return null
  }
  return (
    <div>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma</b>: {game.details.system} <br />
          <b>Desenvolvedor</b>: {game.details.developer} <br />
          <b>Editora</b>: {game.details.publish} <br />
          <b>Idiomas</b>: O jogo oferece suporte a diversos idiomas, incluindo
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </div>
  )
}

export default Product
