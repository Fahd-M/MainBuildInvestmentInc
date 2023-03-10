import "./ContactForm.scss";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [status, setStatus] = useState(undefined);

  //const [errMsg, setErrMsg] = useState('');
  //const [success, setSuccess] = useState(false);

  
   const formRef = useRef();
  // const errRef = useRef(); 

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  }

  // const handleErrorInput = (event) => {
  //   setErrMsg('This field is required!');
  // }

  // const validateEmail = (email) => {
  //   return email.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  // };

  // const validate = () => {
  //   if (validateEmail(email)) {}
  // }
  
  const isFormValid = () => {
    if (!name || !message || !email || !phone ) {
      //setErrMsg(true)
      return false; 
    }
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (isFormValid) {

      emailjs.sendForm('service_uqshywr','template_7rur4xc', form, 'fK2MIDXw4W9_akY2Z')
      .then((result) => {
        console.log(result.text);
        setStatus( {type: 'success' })

        form.reset();
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
        alert("Thank you for contacting Main Build Investments Inc!");
        window.scrollTo(0, 0);
      })

      

    } else {
      alert("Please fill in all fields of the form");
      
    }
  };

  return (
    <section className="contact">
      <div className="contact__content">
        <form ref={formRef} className="form" action="" onSubmit={handleSubmit}>
          
          <label htmlFor="name" className="form__label"> Name </label>
          <input type="text" id="name" name="name" autoComplete="off" onChange={handleChangeName} required />
          <p className={ name ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <label htmlFor="message" className="form__label"> Message </label>
          <textarea type="text" id="message" name="message" autoComplete="off" onChange={handleChangeMessage} required rows={5} wrap="soft" />
          <p className={ message ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <label htmlFor="email" className="form__label"> Contact Email </label>
          <input type="text" id="email" autoComplete="off" name="email" onChange={handleChangeEmail} required />
          <p className={ email ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <label htmlFor="number" className="form__label"> Contact Number </label>
          <input type="text" id="number" name="number" autoComplete="off" onChange={handleChangePhone} required />
          <p className={ phone ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <button type="submit" className="form__button" disabled={!isFormValid()}> Send Message </button>
        </form>
        
        <div className='alert'>
        {status?.type === 'success' && <h3 className='alert__success'> Your email has been sent!</h3>}
        {status?.type === 'error' && <h3 className='alert__error'> Your email has not been sent, please try again! </h3>}
        </div>

      </div>
    </section>
  )
}

export default ContactForm