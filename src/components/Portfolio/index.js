import React from 'react';

import musiglePhoto from './projects/musigle/musigle.png';
import passwordPhoto from './projects/password-generator/password-generator.png';
import quizzicalPhoto from './projects/quizzical/quizzical.png';
import rainmanPhoto from './projects/rain-man/rain-man.png';
import taskmasterPhoto from './projects/taskmaster-pro/taskmaster-pro.png';
import workDayPhoto from './projects/work-day/work-day.png';

import './Portfolio.css';

const projects = [
    {
        name: 'Musigle',
        img: musiglePhoto,
        github: 'https://github.com/aidanamato/music-search-project'
    },
    {
        name: 'Password Generator',
        img: passwordPhoto,
        github: 'https://github.com/Tutor78/password-generator'
    },
    {
        name: 'Quizzical',
        img: quizzicalPhoto,
        github: 'https://github.com/Tutor78/quizzical'
    },
    {
        name: 'Rain Man',
        img: rainmanPhoto,
        github: 'https://github.com/Tutor78/rain-man'
    },
    {
        name: 'Taskmaster Pro',
        img: taskmasterPhoto,
        github: 'https://github.com/Tutor78/taskmaster-pro'
    },
    {
        name: 'Work Day',
        img: workDayPhoto,
        github: 'https://github.com/Tutor78/work-scheduler'
    }
]

function Card() {
    return (
        <div>
            {projects.map((project) => (
                <a key={project.name} className='card' href={project.github} target='_blank' rel='noreferrer'>
                    <img className='card-image' src={project.img} alt={project.name} />
                    <p className='card-title'>{project.name}</p>
                </a>
            ))}
        </div>
    )
};

function ProjectView() {
    return (
        <div>
            <div className='card-display'>
                <Card />
            </div>
        </div>
    )
}

function Portfolio() {
    return (
        <div className='component-container'>
            <ProjectView />
        </div>
    )
}

export default Portfolio;