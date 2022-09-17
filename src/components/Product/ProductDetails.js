import React from "react";
import { OptionsCard } from "./OptionsCard";
import ReactStars from "react-stars";
import shipping from "../../assets/SVG/shipping.svg";
import returning from "../../assets/SVG/return.svg";
import heart from "../../assets/SVG/heart.svg";

const ProductDetails = ({ productDetails }) => {
  return (
    <>
      <div className="d-flex justify-content-between product">
        <div className="product_brand">APPLE</div>
        <div>
          <img src={heart} />
        </div>
      </div>
      <div className="product_title">Apple - iPhone 13 Pro 5G 128GB - Sierra Blue (Verizon)</div>
      <div className="d-flex align-items-center">
        <div>
          <ReactStars value={productDetails.numberOfStars} size={30} edit={false} color2={"#ffd700"} half={false} />
        </div>
        <div className="product_reviews">( {productDetails.numberOfReviews} reviews )</div>
      </div>
      <div className={productDetails.inStock > 0 ? "product_price" : "product_priceout"}>${productDetails.price}</div>
      <div className={productDetails.inStock > 0 ? "product_instock" : "product_outstock"}>
        {productDetails.inStock > 0 ? "In Stock" : "Out of Stock"}
      </div>
      <div className="d-flex mt-4">
        <div className="product_plus">+</div>
        <div className="product_quantity">1</div>
        <div className="product_plus">-</div>
      </div>
      <div className="d-flex">
        <OptionsCard option={"full price"} />
        <OptionsCard option={"intstallment"} selected={true} />
      </div>
      <div className="d-flex">
        <OptionsCard option={"Bank1"} selected={true} />
        <OptionsCard option={"bank2"} />
        <OptionsCard option={"bank3"} />
        <OptionsCard option={"bank4"} />
      </div>
      <div>
        <div className="product_option-title">Memory</div>
        <div className="d-flex">
          <OptionsCard title={"128GB"} subtitle={"$999"} selected={true} />
          <OptionsCard title={"256GB"} subtitle={"$999"} />
          <OptionsCard title={"512GB"} subtitle={"$999"} />
          <OptionsCard title={"1T"} subtitle={"$999"} />
        </div>
      </div>
      <div>
        <div className="product_option-title">Color</div>
        <div className="d-flex">
          <OptionsCard option={"silver"} selected={true} />
          <OptionsCard option={"sirrea Blue"} />
        </div>
      </div>
      <div>
        <div className="product_option-title">Insurance</div>
        <div className="d-flex">
          <OptionsCard option={"1 year"} />
          <OptionsCard option={"2 year"} selected={true} />
        </div>
      </div>
      <div>
        <button className={productDetails.inStock > 0 ? "product_add-to-cart" : "product_add-to-cartout"}>
          Add To Cart
        </button>
      </div>
      <hr style={{ width: "100%" }} />
      <div className="product_shipping">
        <img src={shipping} className="me-2" />
        Free shipping, arrives by Tue, Nov 23
      </div>
      <div className="product_shipping">
        <img src={returning} className="me-2" />
        Free 10-day return window starts Dec 26th Details
      </div>
    </>
  );
};

export default ProductDetails;
