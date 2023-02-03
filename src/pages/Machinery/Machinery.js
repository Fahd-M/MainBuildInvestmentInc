import "./Machinery.scss";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";

import asphaltPaver from '../../assets/images/asphalt-paver.jpg';
import attachments from '../../assets/images/attachments.jpg';
import backhoe from '../../assets/images/backhoe-loader.jpg';
import compactor from '../../assets/images/compactor.jpg';
import constructionTrucks from '../../assets/images/construction-trucks.jpg';
import dozer from '../../assets/images/dozer.jpg';
import excavator from '../../assets/images/excavator.jpg';
import generator from '../../assets/images/generator.jpg';
import motorGrader from '../../assets/images/motorgrader.jpg';
import pumps from '../../assets/images/pumps.jpg';

const Machinery = () => {
  return (
    <>
      <Hero />
      <main className="machinery">
        <div className="machinery__content">
            <div className="machinery__info">
              <h2 className="machinery__title"> Our Machinery </h2>
              <p className="machinery__desc"> 
                Main Build Investment possesses various machinery that can take care of the job - no matter the project! {"\n\n"}
                We own our own industrial equipment in all sizes used for residential or commercial construction, paving and more! 
              </p>

              <ul className="machinery__cards">
                <li className="machinery__card">
                  <img src={excavator} alt='Construction excavation machinery' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Excavators </span>
                </li>

                <li className="machinery__card">
                  <img src={asphaltPaver} alt='Construction asphalt paver' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Asphalt Paver </span>
                </li>

                <li className="machinery__card">
                  <img src={attachments} alt='Construction attachments machinery' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Attachments </span>
                </li>

                <li className="machinery__card">
                  <img src={compactor} alt='Construction compactors' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Compactors </span>
                </li>

                <li className="machinery__card">
                  <img src={dozer} alt='Construction Dozers' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Dozers </span>
                </li>

                <li className="machinery__card">
                  <img src={generator} alt='Construction Generators' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Generators </span>
                </li>

                <li className="machinery__card">
                  <img src={backhoe} alt='Construction Backhoe Loaders' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Backhoe Loaders </span>
                </li>

                <li className="machinery__card">
                  <img src={motorGrader} alt='Construction Motor Graders' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Motor Graders </span>
                </li>

                <li className="machinery__card">
                  <img src={pumps} alt='Construction Pumps' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Pumps </span>
                </li>

                <li className="machinery__card">
                  <img src={constructionTrucks} alt='Construction Trucks' className="machinery__card-img"  />
                  <span className="machinery__card-title"> Trucks </span>
                </li>

                <li className="machinery__card machinery__card-title"> All heavy equipment as required </li>

              </ul>

              <p className="machinery__desc"> 
                We will continue to update this page with our machinery inventory in the near future. {"\n\n"}
                Contact us if you have any further inquiries by calling or submitting the form on the
              <Link to="/contact" className="machinery__desc machinery__desc--cta"> contact page. </Link> </p>
            </div>

        </div>
      </main>
    </>
  )
}

export default Machinery