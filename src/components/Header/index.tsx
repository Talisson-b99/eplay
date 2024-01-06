import { Link } from 'react-router-dom'

import { HeaderBAR, LinkCart, LinkItem, Links } from './styles'

import logo from '../../assets/logo.svg'
import cart from '../../assets/carrinho.svg'

const Header = () => {
  return (
    <HeaderBAR>
      <Link to="/">
        <img src={logo} alt="e-play" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
      <LinkCart href="#">
        0 - produto(s)
        <img src={cart} alt="carrinho" />
      </LinkCart>
    </HeaderBAR>
  )
}

export default Header
