import useFetch from "../hooks/useFetch";
import "./Products.css";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://picsum.photos/v2/list?page=1&limit=30"

);

  if (loading) return <h2 className="status">Loading products...</h2>;
  if (error) return <h2 className="status error">Error: {error}</h2>;

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="grid">
  {data.map((item) => (
    <div key={item.id} className="card">
      <img
        src={`https://picsum.photos/id/${item.id}/300/200`}
        alt={item.author}
      />
      <h3>{item.author}</h3>
      <p>Image ID: {item.id}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Products;
