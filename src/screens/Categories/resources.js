import api from '../../api'

export const Category = {
  list: () => (
    api.get('/categories')
  )
}

export default Category
