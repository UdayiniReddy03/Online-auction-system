import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    const logout = () => {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("userEmail");

        alert("Logged Out Successfully");

        navigate("/login");

    };

    return (

        <nav className="navbar navbar-expand-lg custom-navbar">

            <div className="container">

                <Link className="navbar-brand logo" to="/">
                    🛒 Online Auction
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >

                    <ul className="navbar-nav align-items-center">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        {!isLoggedIn && (

                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li>
                            </>

                        )}

                        {isLoggedIn && (

                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>

                                <li className="nav-item ms-3">
                                    <Link
                                        className="btn btn-success"
                                        to="/add-product"
                                    >
                                        + Add Product
                                    </Link>
                                </li>

                                <li className="nav-item ms-3">
                                    <button
                                        className="btn btn-danger"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>

                        )}

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;