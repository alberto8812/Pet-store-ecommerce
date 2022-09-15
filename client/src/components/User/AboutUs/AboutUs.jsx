import React, { useState } from 'react';
import './AboutUs.css';

export default function AboutUs(){
    const FORM_ENDPOINT = "";
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100); };

    if(submitted) {
        alert('Thank you! We will be in touch soon.')
    }

    // if (submitted) {
    //     return (
    //       <>
    //         <h2>Thank you!</h2>
    //         <div>We'll be in touch soon.</div>
    //       </>
    //     );
    //   }

      return (
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          className='form-aboutus'
        >
        <div className='div-inputs'>
          <div>
            <label>Leave us your message and we'll contact you!</label>
            <input className='inputAbout' type="text" placeholder="Your name" name="name" required />
          </div>
          <div>
            <input className='inputAbout' type="email" placeholder="Email" name="email" required />
          </div>
          <div>
            <textarea className='inputAbout' placeholder="Your message" name="message" required />
          </div>
          <div>
            <button type="submit"> Send a message </button>
          </div>
          </div>
        </form>

      );

}