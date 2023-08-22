import jvResume from '../assets/jv-resume.pdf';
import React, { useState } from 'react';

export default function Resume() {
    const [showPdf, setShowPdf] = useSate(false);
    const handleClick = () => setShowPdf(!showPdf);

    return (
        <>
        <div className="myResume">
            <h2>Resume</h2>
            <p>
                Click{" "}
                <a href='#' onClick={handleClick}>
                    here</a>{' '} to view my resume.
            </p>
            {showPdf ? (
                <div>
                    <object
                        width='100%'
                        height='800'
                        data={jvResume}
                        type='application/pdf'
                        />
                        </div>
            ) : (
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
            )}
        </div>
        </>
    );
}