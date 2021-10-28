import React, { useState } from 'react';

import './Nav.css';

function Nav() {
    const [dropdown, setDropdown] = useState('hide');

    function toggleDropdown() {
        const dropdownMenu = document.querySelector('.dropdown-menu');

        if (dropdown === 'hide') {
            setDropdown('show');
            dropdownMenu.classList.add('show');
        } else {
            setDropdown('hide');
            dropdownMenu.classList.remove('show');
        }
    }

    function showDropdown() {
        const dropdownMenu = document.querySelector('.dropdown-menu');

        setDropdown('show');
        dropdownMenu.classList.add('show');
    }

    function hideDropdown() {
        const dropdownMenu = document.querySelector('.dropdown-menu');

        setDropdown('hide');
        dropdownMenu.classList.remove('show');
    }

    return (
        <nav>
            <ul>
                <li>
                    <button className='nav-button'>About Me</button>
                </li>
                <li className='dropdown' onMouseLeave={() => hideDropdown()}>
                    <button className='nav-button' onMouseEnter={() => showDropdown()} onClick={() => toggleDropdown()}>Portfolio</button>
                    <div className='dropdown-menu'>
                        <button className='dropdown-item'>Bootcamp</button>
                        <button className='dropdown-item'>Challenges</button>
                        <button className='dropdown-item'>Personal</button>
                    </div>
                </li>
                <li>
                    <button className='nav-button'>Contact</button>
                </li>
                <li>
                    <button className='nav-button'>Resume</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;