import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        name: "",

        email: "",

        password: "",

        role: "USER"

    });

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/users/register", user);

            alert(response.data);

            if (response.data === "User Registered Successfully") {

                navigate("/login");

            }

        }

        catch (error) {

            alert("Registration Failed");

            console.log(error);

        }

    };

    return (

        <div className="auth-page">

            <div className="card auth-card">

                <div className="card-body">

                    <h1 className="text-center mb-4">

                        Register

                    </h1>

                    <form onSubmit={handleRegister}>

                        <input

                            className="form-control mb-3"

                            placeholder="Full Name"

                            name="name"

                            value={user.name}

                            onChange={handleChange}

                            required

                        />

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

                            className="form-control mb-4"

                            placeholder="Password"

                            name="password"

                            value={user.password}

                            onChange={handleChange}

                            required

                        />

                        <button className="btn btn-success w-100">

                            Register

                        </button>

                    </form>

                    <hr />

                    <p className="text-center">

                        Already have an account?

                        <Link
                            className="text-success fw-bold text-decoration-none ms-2"
                            to="/login"
                        >

                            Login

                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Register;