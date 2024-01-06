import { HeaderBAR, LinkCart, LinkItem, Links } from './styles'

import logo from '../../assets/logo.svg'
import cart from '../../assets/carrinho.svg'

const Header = () => {
  return (
    <HeaderBAR>
      <img src={logo} alt="e-play" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
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
