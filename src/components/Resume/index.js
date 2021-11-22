import React from 'react';
import photo from './resume.png';

import './Resume.css';

function Resume() {
    return (
        <div className='component-container'>
            <h1 className='resume-title'>Resume</h1>
            <img className='resume-image' src={photo} alt="resume"></img>
        </div>
    )
}

export default Resume;