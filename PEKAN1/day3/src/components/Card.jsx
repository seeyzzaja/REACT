function Card(props) {
    return(
        <div style={{ border: '1px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            {props.children}
        </div>
    )
}
export default Card