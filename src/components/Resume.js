import JvResume from '../assets/jvresume.pdf';
import React, { useState } from 'react';

export default function Resume() {
    const [showPdf, setShowPdf] = useState(false);
    const handleClick = () => setShowPdf(!showPdf);

    return (
        <>
            <div className="myResume">
                <h2>Resume</h2>
                <p>
                    Click{" "}
                    <a href={JvResume} target="_blank" rel="noopener noreferrer">
                        here
                    </a>
                    {" "}to view my resume.
                </p>
                <button className='resumeBtn' onClick={handleClick}>Preview PDF</button>
                {showPdf && (
                    <iframe
                        src={JvResume}
                        title="resume"
                        width="100%"
                        height="100%"
                    />
                )}
                    <>
                        <h3>Front-End Skills</h3>
                        <ul>
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                        </ul>
                        <h3>Back-End Skills</h3>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>APIs</li>
                            <li>MySQL, Sequelize</li>
                            <li>NoSQL</li>
                            <li>MongoDB, Mongoose</li>
                            <li>GraphQL</li>
                            <li>REST</li>
                        </ul>
                    </>
                
            </div>
        </>
    );
}