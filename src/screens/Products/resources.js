import api from '../../api'

export const Product = {
  list: () => (
    api.get('/products')
  )
}

export default Product
