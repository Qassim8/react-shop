import React, { Fragment, useContext } from "react";
import Banner from "../components/Banner";
import GridImages from "../components/GridImages";
import ProductsList from "../components/ProductsList";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import { productsContext } from "../context/ProductsProvider";

const Home = () => {
  const { homeProducts } = useContext(productsContext);
  return (
    <Fragment>
      <Banner />
      <GridImages />
      <div>
        <ProductsList products={homeProducts} />
        <div className="container mb-5 text-center">
          <Link to={"/product"} className=" btn btn-dark">
            Show more!
          </Link>
        </div>
      </div>
      <Newsletter />
    </Fragment>
  );
};

export default Home;
