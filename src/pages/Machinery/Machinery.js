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
              <p className="machinery__desc"> We will continue to update this page with our machinery inventory. </p>
              <p className="machinery__desc"> Contact us if you have any further inquiries by submitting the form on the
              <Link to="/home" className="machinery__desc machinery__desc--cta"> home page. </Link> </p>
            </div>

        </div>
      </main>
    </>
  )
}

export default Machinery