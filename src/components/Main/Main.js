import "./Main.scss";

import React from 'react'
import ClientList from "../ClientList/ClientList";
import ContactForm from "../ContactForm/ContactForm";

const Main = () => {
  return (
    <main className="main">

        <section className="main__content">
            <h2 className="main__title"> About Us </h2>
            <p className="main__byline">  Founded By Riad Wehbe </p>
            <p className="main__desc"> Real estate and construction specialist </p>

            <p className="main__desc-details"> For consultations on real estate and construction investments.</p>
            <p className="main__desc-details"> Visit our other pages to see our building supplies and machinery. </p>

            <p className="main__desc-details--cta"> Please contact us by filling in the form below! </p>
            <p className="main__desc-details"> You will be contacted shortly afterwards. </p>
        </section>

        <section className="main__clients">
            <ClientList />
        </section>

        <section className="main__contact">
            <ContactForm />
        </section>

    </main>
  )
}

export default Main