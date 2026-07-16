import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        try {

            const response = await api.get("/products");

            setProducts(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Dashboard
            </h2>

            {/* Total Products */}

            <div className="card shadow mb-4">

                <div className="card-body text-center">

                    <h5>Total Products</h5>

                    <h1 className="text-success">

                        {products.length}

                    </h1>

                </div>

            </div>

            {/* Product List */}

            <div className="card shadow">

                <div className="card-body">

                    <h4 className="mb-3">

                        Product List

                    </h4>

                    <table className="table table-bordered table-hover">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>

                                <th>Product</th>

                                <th>Price</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {products.map((product) => (

                                <tr key={product.id}>

                                    <td>{product.id}</td>

                                    <td>{product.productName}</td>

                                    <td>₹ {product.currentPrice}</td>

                                    <td>{product.status}</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;