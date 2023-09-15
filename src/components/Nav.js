import React from 'react';
import { Button } from 'react-bootstrap';

function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <Button variant="dark">
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}>About Me</a>
            </li>
            </Button>
            <Button variant="dark">
            <li className="nav-item">
                <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}
                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
            </li>
            </Button>
            <Button variant="dark">
            <li className="nav-item">
                <a href="#resume" onClick={() => handlePageChange("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
            </li>
            </Button>
            <Button variant="dark">
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact Me</a>
            </li>
            </Button>
        </ul>
    );
}

export default Nav;