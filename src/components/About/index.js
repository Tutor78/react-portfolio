import React from 'react';

import './About.css';

import profilePicture from './profile-pic.jpg';

function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title'>Who Am I?</h1>
            <div className='about-info'>
                <img className='about-image' src={profilePicture} alt='Mike' />
                <p className='about-intro'>
                    That's the question I aim to answer for you here!
                </p>
                <p className='about-text'>
                    Well let's begin with where it all started. I was born on Halloween, 1992
                    in Memphis, Tn. I grew up with my two sisters and parents in a small house
                    in Marion, Ar on the Mississippi river. I spent a lot of my childhood playing
                    sports, riding bikes, and generally spending time outdoors as a part of the Boy Scouts.
                    I attended a private school as a child which helped to grow my leadership,
                    curiosity, and helped me develop a lifelong love of learning. It was at this school
                    where I was first introduced to programming through a robotics program, where I had 
                    the pleasure of being one of the first students invited to join. I've used this experience
                    to truly drive my passion for programming and generally all things to deal with computers.
                </p>
                <p className='about-text'>
                    After I graduated high school, I went into the military where I served in San Diego on the USS
                    Comstock as a boatswain's mate. I really fell in love with the sea at that time and learned the 
                    true value of hard work. I became a boatswain's mate third class at the ripe old age of 19 and 
                    was subsequently put in charge of other sailors. Here I really grew into my own as a self starter
                    and leader as I had the desire to prove myself capable to those around me. After I left the military,
                    I transfered my skills to working offshore where I quickly became a tankerman PIC and picked back up
                    training and leading sailors beneath me. I learned here that I truly thrived in a fast paced 
                    environment and after a few years wanted to spend more time at home. This led me to try my hands at a restaurant
                    where I became a bartender quite rapidly. It was here that I got to truly hone my people skills before I finally
                    moved once more into management. But soon I became bored and wanted to be challenged again and moved back into
                    blue collar work as a landscaper which is my current occupation.
                </p>
                <p className='about-text'>
                    That is when I realized that while I enjoy physical work I decided to look at trying to turn one of my passions 
                    into a job. At first I decided on attending college to study cyber security as I had always been intriqued by 
                    the stories that I had heard. I found the security side of things fun but at times boring and looked at 
                    another degree. That's when I settled on studying computer science with a focus on security. That's when I realized
                    that I truly enjoyed programming. At the time I had another passion that began taking up a ton of my time. Music. 
                    I began to pour my money and focus into music as I began meeting other musicians. It was at this time that I built a 
                    home studio and, under my stage name Mike Tuta, produced and played guitar on a rap song that was released on 
                    Spotify. That's when I decided to switch gears and put my schooling on the backburner and began hustling to try and
                    make it big in the industry. This went well for a bit with a bit of local recognition but after a short time I
                    realized that music should remain my hobby, though I have a true passion for it. That's when I decided to try my hand
                    at a coding bootcamp and settled for one that was given through UCF. Currently, I am within a month of finishing and 
                    am very happy to say that I truly love programming and building applications and websites.
                </p>
            </div>
        </div>
    )
}

export default About;