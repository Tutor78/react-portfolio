import React from 'react';

import Nav from '../Nav';

import './Header.css';

function Header({ setCurrentPage }) {
    return (
        <div className='header'>
            <h1>Mike Tutor</h1>
            <Nav setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Header;