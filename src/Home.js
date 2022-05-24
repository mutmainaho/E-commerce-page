import React, { Component } from "react";
import Product1 from "./images/ProductCard.png";
import Product2 from "./images/ProductCard 1.png";
import Product3 from "./images/ProductCard 2.png";
import Product4 from "./images/ProductCard 3.png";
import Product5 from "./images/ProductCard4.png";






 class Home extends Component {
  render() {
    return (
        
      <div className="home">
          
          <div className="row">
          <h1>Category name </h1>
              <div className="col">
                  <img src={Product1} alt="product1"/>
                  <img src={Product2} alt="product2"/>
                  <img src={Product3} alt="product3"/>
              </div>
              <div className="col">
                  <img src={Product4} alt="product4"/>
                  <img src={Product1} alt="product1"/>
                  <img src={Product5} alt="product5"/>
              </div>

          </div>

      </div>
      
    )

  }
}
export default Home;
