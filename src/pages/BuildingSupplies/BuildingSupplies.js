import "./BuildingSupplies.scss";
import Hero from "../../components/Hero/Hero";
import { Link } from 'react-router-dom';

import asphalt from '../../assets/images/asphalt.jpg';
import brick from '../../assets/images/brick.jpg';
import concrete from '../../assets/images/concrete.jpg';
import glass from '../../assets/images/glass.jpg';
import marble from '../../assets/images/marble.jpg';
import rebar from '../../assets/images/rebar.jpg';
import steel from '../../assets/images/Steel.jpg';
import wood from '../../assets/images/wood.jpg';
import tiles from '../../assets/images/tiles.jpg';
import stone from '../../assets/images/stone-wall-construction.jpg';
import plastic from '../../assets/images/plastic.jpg';
import textiles from '../../assets/images/textiles.jpg';

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
              <h2 className="build-supplies__title"> Our Building Supplies </h2>
              <p className="build-supplies__desc"> 
                At Main Build Investment Inc. we are suppliers to building material/equipment supplies, and provide all building equipment required for successful construction of residential and commercial properties.{"\n"}
                We provide all necessary steps to ensure a completed project.
              </p>

              <ul className="build-supplies__cards">
                <li className="build-supplies__card">
                  <img src={concrete} alt="Concrete for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Concrete </span>
                </li>

                <li className="build-supplies__card">
                  <img src={asphalt} alt="Asphalt for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Asphalt </span>
                </li>

                <li className="build-supplies__card">
                  <img src={tiles} alt="Tiles for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Tiles </span>
                </li>

                <li className="build-supplies__card">
                  <img src={rebar} alt="Rebar for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Rebar </span>
                </li>

                <li className="build-supplies__card">
                  <img src={wood} alt="Wood for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Wood </span>
                </li>

                <li className="build-supplies__card">
                  <img src={stone} alt="Stone for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Stone </span>
                </li>

                <li className="build-supplies__card">
                  <img src={marble} alt="Marble for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Marble </span>
                </li>

                <li className="build-supplies__card">
                  <img src={steel} alt="Steel for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Steel </span>
                </li>

                <li className="build-supplies__card">
                  <img src={glass} alt="Glass for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Glass </span>
                </li>

                <li className="build-supplies__card">
                  <img src={brick} alt="Brick for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Brick </span>
                </li>

                <li className="build-supplies__card">
                  <img src={plastic} alt="Plastic for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Plastic </span>
                </li>

                <li className="build-supplies__card">
                  <img src={textiles} alt="Textiles for construction" className='build-supplies__img' />
                  <span className='build-supplies__card-title'> Textiles </span>
                </li>

                <li className="build-supplies__card build-supplies__card-title">All other interior or exterior items</li>
              </ul>

              <p className="build-supplies__desc">
                Custom options are available upon request. {"\n\n"}
                We will continue to update this page with our building supplies inventory in the near future.{"\n"}
                Contact us if you have any further inquiries by submitting the form on the 
                  <Link to="/contact" className="build-supplies__desc build-supplies__desc--cta"> contact page. </Link>
              </p>
            </div>

        </div>
      </main>
    </>
  )
}

export default BuildingSupplies