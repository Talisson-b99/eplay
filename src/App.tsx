import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'

import Rotas from './routes'

import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
