import React ,{ useState } from "react";
import { useMemo } from "react";


const ListProduk = React.memo(function ListProduk({product}) {
    console.log('🛒 ProductItem render:', product.name);
    return(
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
})


function Produk() {
    const [count,setCount] =useState(0)

    const products = useMemo (()=> [
        {id:1,name:'laptop',price:2000},
        {id:2,name:'keybord',price:1000},
        {id:3,name:'smartphone',price:3000}
    ],[])


    return(

        <>
        <button onClick={()=>setCount(count + 1)}>
            update state lain {count}
        </button>

        {products.map(p=>(
            <ListProduk key={p.id} product ={p}/>
        ))}
        </>
    )
}

export default Produk