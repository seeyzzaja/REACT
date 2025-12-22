function ProductFilter({ onFilter }) {
  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="">Semua</option>
      <option value="men's clothing">Men</option>
      <option value="women's clothing">Women</option>
      <option value="electronics">Electronics</option>
    </select>
  )
}

export default ProductFilter
