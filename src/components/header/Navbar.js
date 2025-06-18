import React from 'react';
import './Navbar.css';

import Button from '../button/Button';

export default function Navbar({ setCurrentPage }) {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">Page Title</a>
            </div>
            <div className="navbar-center">
                
            </div>
            <div className="navbar-right">
                <ul className="nav-buttons">
                    <Button buttonText={'HOME'} onClick={() => setCurrentPage('home')}></Button>
                    <Button buttonText={'PROJECTS'} onClick={() => setCurrentPage('projects')}></Button>
                    <Button buttonText={'ART'} onClick={() => setCurrentPage('art')}></Button>
                    <Button buttonText={'BLOG'} onClick={() => setCurrentPage('blog')}></Button>
                    <Button buttonText={'ABOUT'} onClick={() => setCurrentPage('about-me')}></Button>
                </ul>
            </div>
        </nav>
    )
}