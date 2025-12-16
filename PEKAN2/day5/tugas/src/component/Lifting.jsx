function NameInput({name,setName}) {
    return(
        <div>
            <input type="text"
            placeholder="nama"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default NameInput