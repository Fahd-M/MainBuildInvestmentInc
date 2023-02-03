import ContactForm from "../../components/ContactForm/ContactForm"
import Hero from "../../components/Hero/Hero";
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
        <Hero />
        <div className="contact__content">
            <div className="contact__text">
              <h2 className="contact__title"> Get in Touch </h2>
              <p className="contact__subtitle"> 
                For high quality work and professional services contact Main Build Investments! {"\n\n"}
                Get started on your project by giving us some basic information and requesting a quote by calling{"\n\n"} 
                <span className='contact__subtitle--bold'> 1-800-710-2502  </span> {"\n\n"}
                or emailing us by filling out the following form. You will receive a response shortly afterwards. 
              </p>
            </div>
            <div className="contact__form">
                <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default Contact