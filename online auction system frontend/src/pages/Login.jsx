import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/users/login", user);

            if (response.data === "Login Successful") {

                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("userEmail", user.email);

                alert("Login Successful");

                navigate("/dashboard");

                window.location.reload();

            } else {

                alert(response.data);

            }

        } catch (error) {

            console.log(error);

            alert("Login Failed");

        }

    };

    return (

        <div className="auth-page">

            <div className="card auth-card">

                <div className="card-body">

                    <h1 className="text-center mb-4">
                        Login
                    </h1>

                    <form onSubmit={handleLogin}>

                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />

                        <div className="text-end mb-3">

                            <a
                                href="#"
                                className="text-success text-decoration-none"
                            >
                                Forgot Password?
                            </a>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-success w-100"
                        >
                            Login
                        </button>

                    </form>

                    <hr />

                    <p className="text-center">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-success fw-bold text-decoration-none ms-2"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;