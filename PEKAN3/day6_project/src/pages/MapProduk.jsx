function ProductList({ products }) {
  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </>
  )
}

export default ProductList
