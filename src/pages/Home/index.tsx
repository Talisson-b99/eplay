import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { Game } from '../../dtos/Game'

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((response) => response.json())
      .then((response) => setPromocoes(response))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((response) => response.json())
      .then((response) => setEmBreve(response))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
