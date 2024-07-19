import React from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Banner from "../Component/Banner/Banner";
import Rowlist from "../Component/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
};

export default Home;
