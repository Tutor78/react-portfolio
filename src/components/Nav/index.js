import React from 'react';

import './Nav.css';

function Nav({ setCurrentPage }) {
    function setPage(event) {
        switch (event.target.textContent) {
            case 'About':
                setCurrentPage('about');
                break;
            case 'Portfolio':
                setCurrentPage('portfolio');
                break;
            case 'Contact':
                setCurrentPage('contact');
                break;
            case 'Resume':
                setCurrentPage('resume');
                break;
            default:
                setCurrentPage('about');
                break;
        }
    }

    return (
        <nav>
            <ul>
                <li>
                    <button className='nav-button' onClick={setPage}>About Me</button>
                </li>
                <li>
                    <button className='nav-button' onClick={setPage}>Portfolio</button>
                </li>
                <li>
                    <button className='nav-button' onClick={setPage}>Contact</button>
                </li>
                <li>
                    <button className='nav-button' onClick={setPage}>Resume</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;