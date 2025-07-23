import React from "react";
import Home from "./Home.jsx";
import { HeadingsShop } from "./headings.jsx";
import "./Shop.css";
import { AllData } from "./allData.js";
import { useState } from "react";
import { HashLink as Haslink } from "react-router-hash-link";

import { useCart } from "./AddToCart/CartContext.jsx";
const Shop = ({ searchResults, searchQuery }) => {
  let [alldata, setAllData] = useState(AllData);

  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="shop">
      <div className="now-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>SNWATCH NOW</h1>
            <p>Discover our current collections and limited editions</p>
            <Haslink smooth to="#shop-heading" className="cta-link">
              <button className="cta-button">View Collection</button>
            </Haslink>
          </div>
        </section>
        <h2 className="SearchResultStatus">
          Search Results for "{searchQuery}"
        </h2>
        {/* Featured Watches */}
        <section className="featured-section">
          <h2>Featured Timepieces</h2>
          <div className="watches-grid">
            {/* this well be display when we search */}
            {searchResults.map((watch) => (
              <div key={watch.id} className="watch-card">
                {watch.tag === "limited" && (
                  <span className="tag limited">LIMITED</span>
                )}
                {watch.tag === "new" && <span className="tag new">NEW</span>}
                {watch.tag === "bestseller" && (
                  <span className="tag bestseller">BESTSELLER</span>
                )}

                <img src={watch.img} alt={watch.name} className="watch-image" />
                <div className="watch-details">
                  <h3>{watch.name}</h3>
                  <p className="collection">{watch.color}</p>
                  <p className="price">
                    RS.{watch.newPrice} &nbsp; &nbsp; &nbsp;RS.
                    <span style={{ textDecoration: "line-through" }}>
                      {watch.oldPrice}
                    </span>
                  </p>
                  <button onClick={() => handleAddToCart(watch)}>
                    Add to buy
                  </button>
                </div>
              </div>
            ))}
            {/* End this well be display when we search */}
            {/* this well be display as manual */}
            {alldata.map((watch) => (
              <div key={watch.id} className="watch-card">
                {watch.tag === "limited" && (
                  <span className="tag limited">LIMITED</span>
                )}
                {watch.tag === "new" && <span className="tag new">NEW</span>}
                {watch.tag === "bestseller" && (
                  <span className="tag bestseller">BESTSELLER</span>
                )}

                <img src={watch.img} alt={watch.name} className="watch-image" />
                <div className="watch-details">
                  <h3>{watch.name}</h3>
                  <p className="collection">{watch.color}</p>
                  <p className="price">
                    RS.{watch.newPrice} &nbsp; &nbsp; &nbsp;RS.
                    <span style={{ textDecoration: "line-through" }}>
                      {watch.oldPrice}
                    </span>
                  </p>
                  <button onClick={() => handleAddToCart(watch)}>
                    Add to buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Collection */}
        <section className="collection-section">
          <div className="collection-content">
            <div className="collection-text">
              <h2>Autumn/Winter 2023</h2>
              <p>
                Our latest collection blends timeless craftsmanship with
                contemporary design. Each timepiece is assembled by hand in our
                Swiss workshop.
              </p>
              <Haslink smooth to="#shop-heading" className="cta-link">
                <button className="outline-button">Explore Collection</button>
              </Haslink>
            </div>
            <div className="collection-image"></div>
          </div>
        </section>

        {/* Limited Edition */}
        <section className="limited-section">
          <span className="limited-badge">LIMITED EDITION</span>
          <h2>Exclusive Timepieces</h2>
          <p>
            Only 50 pieces worldwide. Each watch comes with a certificate of
            authenticity signed by our master watchmaker.
          </p>
          <Haslink smooth to="/#homeLink" className="cta-link">
            <button className="secondary-button">Reserve Yours</button>
          </Haslink>
        </section>
      </div>
      <div className="shop-heading" id="shop-heading">
        <HeadingsShop />
        <Home id="homeLink" />
      </div>
    </div>
  );
};

export default Shop;
