import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [bidAmount, setBidAmount] = useState("");

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        const response = await api.get("/products/" + id);
        setProduct(response.data);
    };

    const placeBid = async () => {

        if (bidAmount === "") {
            alert("Enter Bid Amount");
            return;
        }

        const bid = {
            bidAmount: Number(bidAmount),
            userId: 1,
            productId: Number(product.id)
        };

        console.log(bid);

        try {console.log("Sending Bid:");
            console.log(JSON.stringify(bid, null, 2));
            const response = await api.post("/bids", bid);

            alert(response.data);

            setBidAmount("");

            fetchProduct();

        } catch (error) {

            console.log(error.response);

            alert(
                error.response?.data?.message ||
                JSON.stringify(error.response?.data)
            );
        }
    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2>{product.productName}</h2>

                    <p>{product.description}</p>

                    <h3>
                        Current Price : ₹ {product.currentPrice}
                    </h3>

                    <input
                        type="number"
                        className="form-control mt-3"
                        placeholder="Enter Bid Amount"
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