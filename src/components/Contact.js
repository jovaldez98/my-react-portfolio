import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// Helper function that checks if an email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Conditional statement that checks if there is anything in the input field
        if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleValidation = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            if (!validateEmail(inputValue)) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage('');
            }
        } else {
            if (!inputValue.length) {
                setErrorMessage(`${inputType} is required`);
            } else {
                setErrorMessage('');
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setErrorMessage("Your contact information has been submitted!");

        setEmail("");
        setMessage("");
    };

    return (
        <div className="contactForm">
            <h2>Contact Info</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="name@mail.com"
                        value={email} name="email"
                        onChange={handleInputChange}
                        onBlur={handleValidation} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea"
                        placeholder="Your message here..."
                        rows={3}
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleValidation} />
                </Form.Group>
                <div className='contactBtnCenter'>
                    <Button type="submit" className="submitBtn" onClick={handleFormSubmit} variant='outline-dark'>Send</Button>
                </div>
            </Form>
            {errorMessage && (
                <div>
                    <p className="errorText">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;