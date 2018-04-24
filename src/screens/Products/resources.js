import api from '../../api'

export const Produtct = {
  list: () => (
    api.get('/products')
  )
}

export default Produtct
