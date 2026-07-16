import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="row">

                    <div className="col-md-4 text-center mb-3">

                        <h4>🛒 Online Auction</h4>

                        <p>Buy. Bid. Win.</p>

                    </div>

                    <div className="col-md-4 text-center mb-3">

                        <h5>Quick Links</h5>

                        <p>Home</p>
                        <p>Products</p>
                        <p>Dashboard</p>

                    </div>

                    <div className="col-md-4 text-center mb-3">

                        <h5>Contact</h5>

                        <p>📧 support@auction.com</p>
                        <p>📞 +91 9876543210</p>

                    </div>

                </div>

                <hr />

                <p className="copyright">

                    © 2026 Online Auction System | Developed using React + Spring Boot + MySQL

                </p>

            </div>

        </footer>

    );

}

export default Footer;