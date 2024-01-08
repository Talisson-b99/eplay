import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import { Game } from '../../dtos/Game'

const Categories = () => {
  const [acao, setAcao] = useState<Game[]>([])
  const [esportes, setEsportes] = useState<Game[]>([])
  const [simulacao, setSimulacao] = useState<Game[]>([])
  const [luta, setLuta] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((response) => response.json())
      .then((response) => setAcao(response))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((response) => response.json())
      .then((response) => setEsportes(response))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((response) => response.json())
      .then((response) => setSimulacao(response))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((response) => response.json())
      .then((response) => setLuta(response))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((response) => response.json())
      .then((response) => setRpg(response))
  }, [])

  return (
    <>
      <ProductsList games={acao} title="RPG" background="black" />
      <ProductsList games={esportes} title="Esportes" background="gray" />
      <ProductsList games={simulacao} title="Simulação" background="black" />
      <ProductsList games={luta} title="Luta" background="gray" />
      <ProductsList games={rpg} title="RPG" background="black" />
    </>
  )
}

export default Categories
