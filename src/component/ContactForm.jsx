import React, { useState } from 'react';
import '../component-styles/contactForm.css';

function ContactForm() {
   const [formState, setFormState] = useState({});

   const changeHandler = (event) => {
      setFormState({ ...formState, [event.target.name]: event.target.value });
   }

   const submitHandler = (event) => {
     event.preventDefault();
      const config = {
         Username: 'palash.deshmukh02@gmail.com',
         Password: '0B03BAF851426BD498FE75F37DAB504C842F',
         Host: 'smtp.elasticemail.com',
         Port: 2525,
         To: 'palashdeshmukh54321@gmail.com',
         From: formState.myEmail,
         Subject: `${formState.fname} viewed your portfolio`,
         Body: `${formState.fname} connected to you over email`,
      };
      
  if (window.Email) {
    window.Email.send(config).then(() => {
      alert("Email sent successfully");
    }).catch((error) => {
      alert("Email could not be sent. Error: " + error);
    });
  }
}

   return (
      <>
         <div id='contact-form-main-container'>
            <form id='contact-from-container' onSubmit={submitHandler}>
               <h1 id='form-heading-h1'>Get in Touch with Me</h1>
               <br />
               <p id='heading-paragraph'>Let's Begin the Conversation. Share a bit about yourself, and we'll reach out to you as soon as possible.</p>
               <div id='firstLast-container'>
                  <div className='labelBox-container labelBox-container-50'>
                     <label htmlFor="firstName">First name</label>
                     <input type="text" name="fname" id='firstName' value={formState.fname || '' } onChange={changeHandler} required />
                  </div>
                  <div className='labelBox-container labelBox-container-50'>
                     <label htmlFor="lastName">Last name</label>
                     <input type="text" name="lname" id='lastName' value={formState.lname || ''} onChange={changeHandler} required />
                  </div>
               </div>
               <div id='contact-mobile-container'>
                  <div className='labelBox-container labelBox-container-100'>
                     <label htmlFor="contact">Mobile number</label>
                     <input type="tel" name="contactNumber" id='contact' pattern="[0-9+-() ]*" title="Ten digits code" value={formState.contactNumber || ''} onChange={changeHandler} required />
                  </div>
               </div>
               <div id='contact-email-container'>
                  <div className='labelBox-container labelBox-container-100'>
                     <label htmlFor="Email">Email</label>
                     <input type="email" name="myEmail" id='Email' value={formState.myEmail || ''} onChange={changeHandler} required />
                  </div>
               </div>
               <div id='textarea-container'>
                  <div className='labelBox-container labelBox-container-100'>
                     <label htmlFor="textMsg">Message</label>
                     <textarea rows="5" cols="50" name='textMessage' id='textMsg' value={formState.textMessage || ''} onChange={changeHandler} required></textarea>
                  </div>
               </div>
               <div id='contact-form-subBtn-container'>
                  <input type="submit" name="formSubmit" id='contactSubmit' value="Submit" required />
               </div>
            </form>
         </div>
      </>
   )
}

export default ContactForm;
