import { useState } from "react";
import api from "../services/api";

function AddProduct() {

    const [product, setProduct] = useState({
        productName: "",
        description: "",
        startingPrice: "",
        imageUrl: "",
        status: "AVAILABLE"
    });

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });

    };

    const addProduct = async (e) => {

        e.preventDefault();

        try {

            const data = {
                ...product,
                currentPrice: product.startingPrice,
                startTime: new Date().toISOString(),
                endTime: new Date(Date.now() + 86400000).toISOString()
            };

            const response = await api.post("/products", data);

            alert("Product Added Successfully");

            console.log(response.data);

            setProduct({
                productName: "",
                description: "",
                startingPrice: "",
                imageUrl: "",
                status: "AVAILABLE"
            });

        } catch (error) {

    console.log(error);

    console.log(error.response);

    console.log(error.response?.data);

    alert(error.response?.data || "Unable to Add Product");
        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Add Product
                            </h2>

                            <form onSubmit={addProduct}>

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Product Name"
                                    name="productName"
                                    value={product.productName}
                                    onChange={handleChange}
                                    required
                                />

                                <textarea
                                    className="form-control mb-3"
                                    placeholder="Description"
                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="number"
                                    className="form-control mb-3"
                                    placeholder="Starting Price"
                                    name="startingPrice"
                                    value={product.startingPrice}
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Image URL"
                                    name="imageUrl"
                                    value={product.imageUrl}
                                    onChange={handleChange}
                                />

                                <button className="btn btn-success w-100">
                                    Add Product
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddProduct;