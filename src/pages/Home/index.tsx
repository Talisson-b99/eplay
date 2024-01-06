import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { Game } from '../../models/Game'

import resident from '../../assets/resident.png'
import diablo from '../../assets/diablo.png'
import star_wars from '../../assets/star_wars.png'
import zelda from '../../assets/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'PS5',
    infos: ['5%', 'R$ 350,00'],
    image: diablo,
    title: 'Diablo 4'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: star_wars,
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda,
    title: 'The Legend of Zelda - TOKh'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['10/24'],
    image: resident,
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'PS5',
    infos: ['07/24'],
    image: diablo,
    title: 'Diablo 4'
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['01/24'],
    image: star_wars,
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    infos: ['05/24'],
    image: zelda,
    title: 'The Legend of Zelda - TOKh'
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
