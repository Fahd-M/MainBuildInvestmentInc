import "./Main.scss";

import React from 'react'
import ClientList from "../ClientList/ClientList";
import { Link } from "react-router-dom";
import tripleConstraint from "../../assets/images/triple-constraint.jpg";

const Main = () => {
  return (
    <main className="main">

        <section className="main__content">
            <h2 className="main__title"> About Us </h2>
            <p className="main__byline">  Founded By Riad Wehbe(Owner and Project Manager) </p>
            <p className="main__desc"> Specialist in all your project needs </p>

            <div className="main__desc-details"> 
              <p className="main__desc-detail">  
                Main Build Investments as a company our values and culture can be summed up by three words:  
                  <span className="main__desc-detail--bold">
                    passion, dedication and reliability.
                  </span>
              </p>

              <p className="main__desc-detail">  
                This creates our business ethics that strengthen our ability to deliver incredible value to our clients and future partners.
                The satisfaction of our clients are crucial to our continued success. 
                We firmly believe our success depends on delivering the highest level of quality and service at all levels of our organization we promote a creative way of thinking. 
                We want everyone to challenge the status-quo : to invent, develop, and innovate to help us effectively grow into the next stage of our company’s history. 
                We will strive to access new business opportunities within the broad growth strategy of our company. 
                In order to provide the high-quality service our clients demand and deserve, the company must be consistently reliable and dedicated to exceed expectations. 
                We will be active and caring contributors to the communities in which we live and work. 

              </p>


              <p className="main__desc-detail--cta">  
                Please visit our other pages for  
                  <Link to="/supplies" className="main__desc-link"> supplies, </Link> 
                  <Link to="/machinery" className="main__desc-link"> machinery, </Link>
                  <Link to="/contact" className="main__desc-link"> or to contact us directly. </Link>
              </p>
            </div>
        </section>

        <section className="main__resources">
            <div className="main__resources-heading">
              <img className="main__resources-image" src={tripleConstraint} alt="Project Management Triple Constraint diagram" />
              <h3 className="main__resources-title"> 
                Build Your Project on Time & on Budget With Main Build Investment
              </h3>
            </div>

            <p className="main__resources-byline">
              We deploy the necessary resources and personnel to provide value and achieve your project objectives. {"\n"} 
              We assist our clients in all types of projects, residential or commercial, we meet all your needs.  
            </p>

            <ClientList />

            <div className="main__services">
              <h4 className="main__services-title"> Services </h4>
              <p className="main__services-text">
                We are more than a supplier of quality building materials. 
                We offer an extensive range of services and solutions to support our clients. 
                With customer focused technologies, we can provide everything your project needs, and the expertise to get everything installed properly!
              </p>
            </div>

            <div className="main__quotes">
              <h4 className="main__quotes-title"> Project Quotes </h4>
              <p className="main__quotes-text">
                Main Build Investment; we support your job quotes for project materials.
                With decades of experience, and best price, we have the expertise and commitment to support customers in getting the correct information projects of all sizes.
              </p>
            </div>
        </section>

        <section className="installation">
          <h3 className="installation__title"> Order & Delivery Options </h3>

          <p className="installation__text">
            Main Build Investments, we offer a variety of delivery options, depending on your region and product category, including:

          </p>
          <ul className="installation__list">
            <li className="installation__item"> Machinery rental or sale </li>
            <li className="installation__item"> Window and Doors </li>
            <li className="installation__item"> Building Material </li>
            <li className="installation__item"> Flooring Material </li>
            <li className="installation__item"> Drywall </li>
            <li className="installation__item"> Building Supplies </li>
          </ul>

          <p className="installation__text">
            Main Build Investment's work with our clients doesn't end with at the time of the sale, nor does it end with the delivery of product to the worksite. {"\n\n"}
            We assist builders and architects throughout the building process, from the planning phases of a project, to the day the last worker walks off the worksite, and in the years to come. {"\n\n"} 
            We strive to build relationships.
          </p>

          <h4 className="installation__learn">
            Learn more about us and how we support the professional builders and contractors of our industry.
          </h4>

          <div className="installation__text-offerings"> We also offer: 
            <ul className="installation__offerings"> 
              <li className="installation__offering"> Training & Education </li>
              <li className="installation__offering"> Product Support </li>
              <li className="installation__offering"> Delivery Options</li>
              <li className="installation__offering"> Customer Support </li>
              <li className="installation__offering"> Marketing Support </li>
            </ul>
          </div>

          <p className="installation__conclusion">
            We are a dedicated full-service firm that specializes in offering our clients a full solution.
          </p>

        </section>

    </main>
  )
}

export default Main