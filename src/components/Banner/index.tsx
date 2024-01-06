import { Imagem, Precos, Titulo } from './styles'

import Tag from '../Tag'

import bannerImg from '../../assets/banner-homem-aranha.png'
import Button from '../Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span>R$ 250,00</span> <br /> por apenas R$ 99,90
          </Precos>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar está oferta"
          to="/produto"
        >
          Apreveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
