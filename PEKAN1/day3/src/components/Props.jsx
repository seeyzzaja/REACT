// function Ap(props) {
//   return <h1>{props.nama}</h1>;
// }
// export default Ap;

function Produk(props) {
    return(
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>nama: {props.nama}</h3>
            <p>harga: {props.harga}</p>
            <p>stock: {props.stock}</p>
            {props.isAvailable 
            ? <p style={{ color: 'green' }}>Tersedia</p>
            : <p style={{ color: 'red' }}>TidakTersedia</p>}
        </div>
    )
}

export default Produk