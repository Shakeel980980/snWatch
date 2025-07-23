import * as React from "react";
import { Headings } from "./headings.jsx";
import Navbar from "./Navbar.jsx";
import "./Home.css";
import { AllData } from "./allData.js";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { useCart } from "./AddToCart/CartContext.jsx";

const Home = ({ searchResults, searchQuery }) => {
  let [mainData, setMainData] = useState(AllData);
  // useCart hook to access cart functions
  // This allows us to add items to the cart from the Home component
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  // Rating variable
  const [rating, setRating] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 4 },
    { id: 3, value: 1 },
  ]);
  let handleRatingChange = (id, newValue) => {
    setRating((previousRating) =>
      previousRating.map((rating) =>
        rating.id === id ? { ...rating, value: newValue } : rating
      )
    );
  };

  return (
    <div>
      <Headings />
      <div className="home">
        {searchQuery && (
          <div className="search-results-container">
            <h2 className="SearchResultStatus">
              Search Results for "{searchQuery}"
            </h2>
            {searchResults.length > 0 ? (
              <div className="card-container">
                {searchResults.map((curr) => (
                  <div className="card" key={curr.id}>
                    <div className="SaveMoney">
                      <p> SAVE RS. {curr.oldPrice - curr.newPrice}</p>
                    </div>

                    <div className="card-img">
                      <img src={curr.img} alt=" missing" />
                    </div>
                    <div className="Add-to-cart-btn">
                      <button onClick={() => handleAddToCart(curr)}>
                        Add to Cart
                      </button>
                    </div>
                    <div className="card-detail">
                      <div className="name">
                        <p>{curr.name}</p>
                      </div>
                      {/* rating using state variable */}
                      <div className="rating">
                        <Rating
                          name="simple-controlled"
                          size="small"
                          value={rating.value}
                          precision={0.5}
                          onChange={(event, newValue) => {
                            handleRatingChange(rating.id, newValue);
                          }}
                        />
                        {/* <p>{curr.rating}</p> */}
                      </div>
                      <div className="price">
                        <p className="OldPrice">Rs. {curr.oldPrice}</p>
                        <p>Rs. {curr.newPrice}</p>
                      </div>
                      <div className="colo">
                        <p> {curr.color}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              searchQuery && <p>No products found matching your search</p>
            )}
          </div>
        )}
        <div className="card-container">
          {mainData.map((curr) => (
            <div className="card" key={curr.id}>
              <div className="SaveMoney">
                <p> SAVE RS. {curr.oldPrice - curr.newPrice}</p>
              </div>

              <div className="card-img">
                <img src={curr.img} alt=" missing" />
              </div>
              <div className="Add-to-cart-btn">
                <button onClick={() => handleAddToCart(curr)}>
                  Add to Cart
                </button>
              </div>
              <div className="card-detail">
                <div className="name">
                  <p>{curr.name}</p>
                </div>
                {/* rating using state variable */}
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    size="small"
                    value={rating.value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      handleRatingChange(rating.id, newValue);
                    }}
                  />
                  {/* <p>{curr.rating}</p> */}
                </div>
                <div className="price">
                  <p className="OldPrice">Rs. {curr.oldPrice}</p>
                  <p>Rs. {curr.newPrice}</p>
                </div>
                <div className="colo">
                  <p> {curr.color}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
