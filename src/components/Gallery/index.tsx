import Section from '../Section'

import zelda from '../../assets/zelda.png'
import spider from '../../assets/banner-homem-aranha.png'
import hogwarts from '../../assets/fundo_hogwarts.png'
import play from '../../assets/play.png'
import zoom from '../../assets/zoom.png'
import close from '../../assets/fechar.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/2SNF4M_v7wc?si=6EUjNmouQzXu9Ldy'
  }
]

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom

    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((item, index) => (
            <Item key={item.url}>
              <img
                src={getMediaCover(item)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(item)}
                  alt="Clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="ícone de fechar" />
          </header>
          <img src={spider} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
