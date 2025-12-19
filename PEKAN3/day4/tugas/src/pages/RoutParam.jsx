import { useParams } from 'react-router-dom';
import React from 'react';

function ProductDetail() {
    const {productId} = useParams()
    return(
        <>
        <h2>Detail Produk</h2>
      <p>ID Produk: {productId}</p>
      <p>Ini adalah halaman detail untuk produk dengan ID {productId}.</p>
        </>
    )

}

export default ProductDetail