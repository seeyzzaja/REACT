function CategoryFilter({category,setCategory}) {
    return(
        <select 
        className="category-select"
        value={category}
        onChange={(e)=> setCategory(e.target.value)}>
            <option value="all">all</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
        </select>
    )
}

export default CategoryFilter