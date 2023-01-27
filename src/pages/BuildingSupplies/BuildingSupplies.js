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
              <p className="build-supplies__desc"> At Main Build Investment Inc. we have access to a variety of building supplies. </p>
              <p className="build-supplies__desc"> We will continue to update this page with our building supplies inventory. </p>
              <p className="build-supplies__desc"> Contact us if you have any further inquiries by submitting the form on the </p>
              <Link to="/home" className="build-supplies__desc build-supplies__desc--cta"> home page. </Link>
            </div>

        </div>
      </main>
    </>
  )
}

export default BuildingSupplies