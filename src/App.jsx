import { useState } from "react"
import { Products } from "./components/Product"
import { products as initialProducts } from "./mocks/products.json"
function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  const filterProducts = (products) => {
    return products.filter(products => {
      return (
        products.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          products.category === filters.category
        )
      )
    })
  }
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
