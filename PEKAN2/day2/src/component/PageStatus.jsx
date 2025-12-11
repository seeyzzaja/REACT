function PageStatus({ status }) {
  let content;
  switch (status) {
    case "loading":
      content = <p>memuat data</p>;

      break;
    case "success":
      content = <p style={{ color: "green" }}>Data berhasil dimuat!</p>;

    case 'error':
         content = <p style={{ color: 'red' }}>Terjadi kesalahan saat memuat data.</p>;
    default:
        content = <p>Status tidak diketahui.</p>;
      break;
  }
  return content
}

export default PageStatus