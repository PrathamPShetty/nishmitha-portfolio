import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="text-primary fw-bold m-0">ProMan</h1>
        </Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <Link to="#home" className="nav-item nav-link active">Home</Link>
                <Link to="#about" className="nav-item nav-link">About</Link>
                <Link to="#skill" className="nav-item nav-link">Skills</Link>
                <Link to="#service" className="nav-item nav-link">Services</Link>
            </div>
            <Link to="index.html" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                <h1 className="text-primary fw-bold m-0">ProMan</h1>
            </Link>
            <div className="navbar-nav me-auto py-0">
                <Link to="#project" className="nav-item nav-link">Projects</Link>
                <Link to="#team" className="nav-item nav-link">Team</Link>
                <Link to="#testimonial" className="nav-item nav-link">Testimonial</Link>
                <Link to="#contact" className="nav-item nav-link">Contact</Link>
            </div>
        </div>
    </nav>
    </>
   
  );
};

export default Navbar;
