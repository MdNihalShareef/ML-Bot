import React from 'react';
import {Link } from 'react-router-dom';
class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <Link to="/">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                </Link>
                                
                                <Link to="/result">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Results</a>
                                    </li> 
                                </Link>
                                
                            </ul>
                        </div>
                </div>
      </nav>
        );
    }
}
 
export default Navbar;