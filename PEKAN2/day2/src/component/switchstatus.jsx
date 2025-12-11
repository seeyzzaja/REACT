function StatusFunction({ Status}) {
    let isi;
    switch(Status) {
        case "Loading":
            isi = <p>Memuat Data....</p>;
            break;
        case "Success":
            isi = <p style={{color: 'green'}}>Data Berhasil Dimuat!</p>;
            break;
        case "Error":
            isi = <p style={{color: 'red'}}>Terjadi Kesalahan Saat Memuat Data.</p>;
            break;
        default:
            isi = <p>Status Tidak Diketahui.</p>;
    }
    return isi;
        
}

export default StatusFunction;
