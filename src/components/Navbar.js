import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ searchText, setSearchText }) => {
    const navigate = useNavigate();
    const [flicker, setFlicker] = useState(false); // State to manage flicker effect

    const handleSubmit = (e) => {
        e.preventDefault();
        setFlicker(true); // Activate flicker effect
        setTimeout(() => {
            navigate('/search');
            setFlicker(false); // Deactivate flicker effect after a short delay
        }, 500); 
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
        navigate('/search');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movie Browser</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="gotosomewherenavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Coming soon</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            value={searchText}
                            onChange={handleChange} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            {/* Apply flicker effect when flicker state is true */}
            {flicker && <div className="flicker"></div>}
        </nav>
    )
}

export default Navbar;
