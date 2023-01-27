import "./ContactForm.scss";
import { useEffect, useState, useRef } from 'react';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  //const [errMsg, setErrMsg] = useState('');
  //const [success, setSuccess] = useState(false);

  
   const formRef = useRef();
  // const errRef = useRef(); 

  //useEffect(() => {}, []);

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
      form.reset();
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      alert("Thank you for contacting Main Build Investments Inc!");
      window.scrollTo(0, 0);

    } else {
      alert("Please fill in all fields of the form");
    }
  };

  return (
    <section className="contact">
      <div className="contact__content">
        <form ref={formRef} className="form" action="" onSubmit={handleSubmit}>
          <h3 className="form__title"> Get in Touch </h3>
          
          <label htmlFor="name" className="form__label"> Name </label>
          <input type="text" id="name" autoComplete="off" onChange={handleChangeName} required />
          <p className={ name ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <label htmlFor="message" className="form__label"> Message </label>
          <textarea type="text" id="message" autoComplete="off" onChange={handleChangeMessage} required rows={5} wrap="soft" />
          <p className={ message ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <label htmlFor="email" className="form__label"> Contact Email </label>
          <input type="text" id="email" autoComplete="off" onChange={handleChangeEmail} required />
          <p className={ email ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <label htmlFor="number" className="form__label"> Contact Number </label>
          <input type="text" id="number" autoComplete="off" onChange={handleChangePhone} required />
          <p className={ phone ? "hidden" : "form__err-msg"}> The field above is required. </p>

          <button type="submit" className="form__button" disabled={!isFormValid()}> Send Message </button>
        </form>

      </div>
    </section>
  )
}

export default ContactForm