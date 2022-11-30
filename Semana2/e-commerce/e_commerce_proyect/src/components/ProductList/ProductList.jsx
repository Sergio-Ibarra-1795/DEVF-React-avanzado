import React, { useState, useEffect } from 'react'

const ProductList = () => {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)

  // Hago la llamada a la API de la lista de productos
  useEffect(() => {
    getProducts()
    setLoading(false)
  }, [])

  const getProducts = async () => {
    let resultProductos = await fetch('https://ecomerce-master.herokuapp.com/api/v1/item')
    resultProductos = await resultProductos.json()
    setProductList(resultProductos)
  }
  console.log(productList)

  return (
    <>
      {
        loading
          ? <h1>Cargando...</h1>
          : productList.map((producto) => (
            <div key={producto._id}>
              <h4>{producto.product_name}</h4>
            </div>
          ))

      }
    </>
  )
}

export default ProductList
