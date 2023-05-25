import React from "react";
import { RiPlantLine } from "react-icons/ri";
import { BsBoxSeam, BsTelephoneOutbound } from "react-icons/bs";

import "./styles.css";

import Card from "../../components/Card/Card";
import IconColumn from "../../components/IconColumn/IconColumn";

const Home = () => {
  return (
    <>
      <div className="bestSelling">
        <div className="bestSellingText">
          <h2 className="bestSellingTitle">Best Selling Plants</h2>
          <p className="bestSellingSubtitle">
            Easiest way to healthy life by buying your favorite plants
          </p>
          <button className="bestSellingSeeMore">See more &rarr;</button>
        </div>
        <Card
          image="https://loremflickr.com/300/363/flower,vase,natural"
          altText="Um exemplo"
          title="Natural Plants"
          description={"R$1,00"}
        />
        <Card
          image="https://loremflickr.com/300/363/flower,bouquet,artificial"
          altText="Um exemplo"
          title="Artificial Plants"
          description={"R$2,00"}
        />
        <Card
          image="https://loremflickr.com/300/363/flower,pot,artificial"
          altText="Um exemplo"
          title="Artificial Plants"
          description={"R$3,00"}
        />
      </div>
      <div className="aboutUs">
        <div className="aboutUsText">
          <h2>About Us </h2>
          <p>Order now and appreciate the beauty of nature</p>
        </div>
        <div className="aboutUsIconContainer">
          <IconColumn
            columnClass="aboutUsColumn"
            icon={<RiPlantLine />}
            title="Large Assortment"
            description="we offer many different types of products with fewer variations in each category."
          />
          <IconColumn
            columnClass="aboutUsColumn"
            icon={<BsBoxSeam />}
            title="Fast & Free Shipping"
            description="4-day or less delivery time, free shipping and an expedited delivery option."
          />
          <IconColumn
            columnClass="aboutUsColumn"
            icon={<BsTelephoneOutbound />}
            title="24/7 Support"
            description="answers to any business related inquiry 24/7 and in real-time."
          />
        </div>
      </div>
      <div className="categories">
        <div className="categoriesText">
          <h2>Categories</h2>
          <p>Find what you are looking for</p>
        </div>
        <div className="categoriesCardsContainer">
          <Card
            image="https://loremflickr.com/300/363/flower,pot,natural"
            altText="Um exemplo"
            title="Natural Plants"
            cardClass="categoriesCard"
            imgClass="categoriesCardImg"
          />
          <Card
            image="https://loremflickr.com/300/363/plant"
            altText="Um exemplo"
            title="Plant Accessories"
            description="Horem ipsum dolor sit amet, consectetur adipiscing elit."
            cardClass="categoriesCard"
            imgClass="categoriesCardImg"
          />
          <Card
            image="https://loremflickr.com/300/363/flower,pot,artificial"
            altText="Um exemplo"
            title="Artificial Plants"
            cardClass="categoriesCard"
            imgClass="categoriesCardImg"
          />
        </div>
        <a href="" target="_self" className="exploreLink">
          Explore &rarr;
        </a>
      </div>
    </>
  );
};

export default Home;
