import React from 'react';

import './About.css';

import profilePicture from './profile-pic.jpg';

function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <div className='about-info'>
                <img className='about-image' src={profilePicture} alt='Mike' />
                <p className='about-text'>
                        Born in 1992 in Memphis, Tennessee, I grew up in rural Arkansas right across the river in a small town known as Marion. As a kid I highly enjoyed 
                    the outdoors and became a scout at an early age. I continued with this through to a life scout. I attended a private school in my hometown until my 
                    junior year. While at this school, I took a liking to math and history excelling in both. 
                    I took part in the founding of our school's robotic team my sophomore year before switching to another school to finish my last two years. Following my graduation I did a brief stint in the U.S. Navy where I served as 
                    a Boatswain's Mate Third Class before leaving the service. This was followed by a few years of working on the western river system as a 
                    barge tankerman PIC where I continued yto improve both my work ethic and leadership abilities. I then switched to resteraunt work where I 
                    did time as a server, bartender, and eventually manager in charge of two stores at the same time. I have also worked in landscaping as both a gardener and crew leader.
                </p>
            </div>
        </div>
    )
}

export default About;