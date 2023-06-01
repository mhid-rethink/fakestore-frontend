import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiPlantLine } from "react-icons/ri";
import { BsBoxSeam, BsTelephoneOutbound } from "react-icons/bs";

import { getProducts } from "../../services/products";
import { getCategories } from "../../services/products";

import Card from "../../components/Card/Card";
import IconColumn from "../../components/IconColumn/IconColumn";

import "./styles.css";
const Home = () => {
  const [bestSellers, setBestSellers] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    getProducts()
      .then((resp) => {
        let count = 0;
        const result = resp.filter((product) => {
          if (
            count < 3 &&
            product.rating.rate > 4.5 &&
            product.rating.count >= 200
          ) {
            count++;
            return true;
          }
          return false;
        });
        setBestSellers(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  useEffect(() => {
    getCategories()
      .then((resp) => {
        setCategories(resp);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <>
      <div className="bestSelling">
        <div className="bestSellingText">
          <h2 className="bestSellingTitle">Best Selling Items</h2>
          <p className="bestSellingSubtitle">Hurry before the stock runs out</p>
          <NavLink>
            <button className="bestSellingSeeMore">See more &rarr;</button>
          </NavLink>
        </div>
        {bestSellers?.map((bestSeller) => {
          return (
            <NavLink to={`/products/${bestSeller.id}`} key={bestSeller.id}>
              <Card
                key={bestSeller.id}
                image={bestSeller.image}
                altText={bestSeller.title}
                title={bestSeller.title}
                description={bestSeller.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
                imgClass="bestSellingCardImg"
                cardClass="bestSellingCard"
              />
            </NavLink>
          );
        })}
      </div>
      <div className="aboutUs">
        <div className="aboutUsText">
          <h2>About Us </h2>
          <p>Order now and appreciate</p>
        </div>
        <div className="aboutUsColumnContainer">
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
          {categories?.map((category) => {
            return (
              <NavLink
                to={`/products/category/${category.name.replace(" ", "-")}`}
                className="categoriesCardLink"
                key={category.name}
              >
                <Card
                  key={category.name}
                  image={category.image}
                  altText={category.name}
                  title={category.name}
                  cardClass="categoriesCard"
                  imgClass="categoriesCardImg"
                />
              </NavLink>
            );
          })}
        </div>
        <NavLink to="/products" className="exploreLink">
          Explore &rarr;
        </NavLink>
      </div>
    </>
  );
};

export default Home;
