import Section from '../Section'

import zelda from '../../assets/zelda.png'
import hogwarts from '../../assets/fundo_hogwarts.png'
import play from '../../assets/play.png'
import zoom from '../../assets/zoom.png'
import close from '../../assets/fechar.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../dtos/Game'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

type ModelState = GalleryItem & {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModelState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom

    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((item, index) => (
            <Item
              key={item.url}
              onClick={() =>
                setModal({
                  isVisible: true,
                  type: item.type,
                  url: item.url
                })
              }
            >
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
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="ícone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
