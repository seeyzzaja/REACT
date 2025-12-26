import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate("/users/1");
  };

  return (
    <>
      <h2>Home</h2>
      <button onClick={goToUser}>Ke User Detail</button>
    </>
  );
}

export default Home;
