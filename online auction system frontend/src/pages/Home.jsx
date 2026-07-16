import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {

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

        <div className="container">

            <div className="hero">

                <h1>Online Auction Marketplace</h1>

                <p>

                    Bid on premium products and win exciting deals.

                </p>

            </div>

            <h2 className="page-title">

                Live Auctions

            </h2>

            <div className="row">

                {products.length === 0 ?

                    (

                        <div className="empty-products">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                                alt="No Products"
                            />

                            <h3>No Products Available</h3>

                        </div>

                    )

                    :

                    (

                        products.map((product) => (

                            <ProductCard

                                key={product.id}

                                product={product}

                            />

                        ))

                    )

                }

            </div>

        </div>

    );

}

export default Home;