function ButtonClicker() {

  const HandelClick = () => {
    alert('tombol di click');
  };

  const handelMouseCenter = () => {
    console.log('mouse masuk area tombol');
  };

  const handelMouseLave = () => {
    console.log('mouse keluar dari tombol');
  };

  return (
    <button
      onClick={HandelClick}
      onMouseEnter={handelMouseCenter}
      onMouseLeave={handelMouseLave}
      style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}
    >
      klik di sini
    </button>
  );
}

export default ButtonClicker;
