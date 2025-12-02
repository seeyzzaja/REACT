function GreetingCard({nam,message}) {
    return(
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
            <h2>{message} {nam}</h2>
            <p>semoga hari menyenanggkan</p>
        </div>
    )
}

GreetingCard.defaultProps ={
    nam:"pengunjung",
    message:'hallo'
    
}
export default GreetingCard;