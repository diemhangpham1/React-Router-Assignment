import React from 'react';

function Card({ title, image, description, route }) {
    return (
        <div className="card">
            <a href={route}>
                <img className="card-image" src={image} alt={title} />
            </a>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

function Project() {
    return (
        <div className='project'>
            <Card title='UX case study' route='/projects/project1' image='/pj1.png' description='A case study aim to create a comprehensive marketing campaign for Dairy Drop, a sustainable and ethical milk delivery service' />
            <Card title='My portfolio website' route='/' image='/pj3.png' description='Built with React, JS, and nodeJS' />
            <Card title='Illustrations' route='https://www.deviantart.com/' image='/pj2.png' description='A collection of my illustrations, done for either college work or as side projects' />
        </div>
    );
}

export default Project;