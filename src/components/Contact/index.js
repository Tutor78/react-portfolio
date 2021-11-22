import React, { useState } from 'react';

import './Contact.css'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='component-container'>
            <h1 className='contact-title'>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className='contact-name'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onChange={handleChange} />
                </div>
                <div className='contact-email'>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                <div className='contact-message'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                </div>
                <button className='contact-button' type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact;