import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
      alert("Unable to load product.");
    }
  };

  const placeBid = async () => {
    // Check whether the user is logged in
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      alert("Please login to place a bid.");
      navigate("/login");
      return;
    }

    if (!bidAmount || Number(bidAmount) <= 0) {
      alert("Enter a valid bid amount.");
      return;
    }

    try {
      const bid = {
        bidAmount: Number(bidAmount),
        userId: 1, // Replace with actual logged-in user ID later
        productId: Number(product.id),
      };

      console.log("Sending Bid:", bid);

      const response = await api.post("/bids", bid);

      alert(response.data);

      setBidAmount("");

      fetchProduct();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data ||
          error.response?.data?.message ||
          "Unable to place bid."
      );
    }
  };

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2>{product.name}</h2>

        <p>
          <strong>Description:</strong> {product.description}
        </p>

        <p>
          <strong>Current Price:</strong> ₹{product.currentPrice}
        </p>

        <p>
          <strong>Seller:</strong> {product.seller}
        </p>

        <div className="mt-4">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your bid amount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />

          <button
            className="btn btn-success mt-3"
            onClick={placeBid}
          >
            Place Bid
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;