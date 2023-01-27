import "./Machinery.scss";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";

const Machinery = () => {
  return (
    <>
      <Hero />
      <main className="machinery">
        <div className="machinery__content">
            <div className="machinery__info">
              <h2 className="machinery__title"> Browse Our Machinery </h2>
              <p className="machinery__desc"> Main Build Investment Inc. owns different machinery that can take care of the job - no matter the project! </p>
              <p className="machinery__desc"> We own our own industrial equipment in all sizes used for construction, paving and more! </p>

              <ul className="machinery__list">
                <li className="machinery__item">Excavation machinery</li>
                <li className="machinery__item">Ashpalt pavers</li>
                <li className="machinery__item">Attachments</li>
                <li className="machinery__item">Compactors </li>
                <li className="machinery__item">Dozers</li>
                <li className="machinery__item">Generators</li>
                <li className="machinery__item">Backhoe Loaders</li>
                <li className="machinery__item">Motor Graders</li>
                <li className="machinery__item">Pumps</li>
                <li className="machinery__item">Trucks</li>
                <li className="machinery__item">All heavy equipment</li>
              </ul>

              <p className="machinery__desc"> We will continue to update this page with our machinery inventory in the near future. </p>
              <p className="machinery__desc"> Contact us if you have any further inquiries by submitting the form on the
              <Link to="/home" className="machinery__desc machinery__desc--cta"> home page. </Link> </p>
            </div>

        </div>
      </main>
    </>
  )
}

export default Machinery