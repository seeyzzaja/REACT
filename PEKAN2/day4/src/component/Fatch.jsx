import { useState, useEffect } from "react";

function Fatching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fatchingData = async () => {
      try {
        const respon = await fetch(
          "https://jsonplaceholder.typicode.com/posts/2"
        );
        if (!respon.ok) {
          throw new error(`HTTP error! status: ${response.status}`);
        }
        const result = await respon.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fatchingData();
  }, []);

  if (loading) return <p>memuat data...</p>;
  if (error) return <p>terjadi error: {error.message}</p>;

  return (
    <>
      <h2>hasil fetching data</h2>
      <h3>{data.titel}</h3>
      <p>{data.body}</p>
    </>
  );
}
export default Fatching