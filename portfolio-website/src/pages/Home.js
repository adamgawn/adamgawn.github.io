import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const Home = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'Description of project one.',
            image: 'path/to/image1.jpg'
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Description of project two.',
            image: 'path/to/image2.jpg'
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Description of project three.',
            image: 'path/to/image3.jpg'
        }
    ];

    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>Here are some of my featured projects:</p>
            <div className="portfolio-items">
                {projects.map(project => (
                    <PortfolioItem 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        image={project.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;