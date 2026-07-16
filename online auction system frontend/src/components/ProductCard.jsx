import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {

    return (

        <div className="col-lg-4 col-md-6 mb-4">

            <div className="card product-card">

                <img

                    src={

                        product.imageUrl ||

                        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"

                    }

                    className="product-image"

                    alt={product.productName}

                />

                <div className="card-body">

                    <h4>

                        {product.productName}

                    </h4>

                    <p>

                        {product.description}

                    </p>

                    <h3 className="price">

                        ₹ {product.currentPrice}

                    </h3>

                    <Link

                        to={`/product/${product.id}`}

                        className="btn btn-success w-100"

                    >

                        View Details

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;