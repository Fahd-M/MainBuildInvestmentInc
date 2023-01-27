import "./BuildingSupplies.scss";
import Hero from "../../components/Hero/Hero";
import { Link } from 'react-router-dom';

const BuildingSupplies = () => {


//   const buildingsupplies = [
//     {
//       item: "name of item",
//       quantity: Number,
//       description: "description of the item",
//       image?
//     }
// ]


  return (
    <>
      <Hero />
      <main className="build-supplies">
        <div className="build-supplies__content">
            <div className="build-supplies__info">
              <h2 className="build-supplies__title"> Browse Our Building Supplies </h2>
              <p className="build-supplies__desc"> At Main Build Investment Inc. we are suppliers to building material/equipment supplies,  </p>
              <p className="build-supplies__desc"> and provide all building equipment required for successful construction of residential and commercial properties. </p>
              <p className="build-supplies__desc"> We provide all necessary steps to ensure a completed project.  </p>

              <ul className="build-supplies__list">
                <li className="build-supplies__item">Concrete</li>
                <li className="build-supplies__item">Ashpalt</li>
                <li className="build-supplies__item">Tiles</li>
                <li className="build-supplies__item">Rebar </li>
                <li className="build-supplies__item">Wood</li>
                <li className="build-supplies__item">Stone</li>
                <li className="build-supplies__item">Marble</li>
                <li className="build-supplies__item">Steel </li>
                <li className="build-supplies__item">Plastic</li>
                <li className="build-supplies__item">Glass</li>
                <li className="build-supplies__item">Textiles</li>
                <li className="build-supplies__item">Brick</li>
                <li className="build-supplies__item">All other interior items</li>
                <li className="build-supplies__item">All other exterior items</li>
              </ul>
              <p className="build-supplies__desc"> Custom options are available upon request.  </p>

              <p className="build-supplies__desc"> We will continue to update this page with our building supplies inventory in the near future. </p>
              <p className="build-supplies__desc"> Contact us if you have any further inquiries by submitting the form on the 
                <Link to="/home" className="build-supplies__desc build-supplies__desc--cta"> home page. </Link>
              </p>
            </div>

        </div>
      </main>
    </>
  )
}

export default BuildingSupplies