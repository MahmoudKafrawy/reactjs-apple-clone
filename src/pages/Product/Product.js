import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Product/Gallery";
import ProductDetails from "../../components/Product/ProductDetails";
import ExploreItems from "../../components/Home/ExploreItems";

const Product = () => {
  const param = useParams();

  const [product, setProduct] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  const getProductDetails = async () => {
    setProduct([]);
    setProductDetails([]);
    const res = await axios.get(`https://63189f2cf6b281877c71eab0.mockapi.io/products/${param.id}`);
    setProductDetails(res.data);
    for (let i = 0; i < 4; i++) {
      setProduct((product) => [...product, { original: res.data.img[i], thumbnail: res.data.img[i] }]);
    }
  };
  useEffect(() => {
    getProductDetails();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [param.id]);

  return (
    <>
      <Row className="container-product">
        <Col md="7" sm="6">
          <Gallery product={product} />
        </Col>
        <Col md="5" sm="6">
          <ProductDetails productDetails={productDetails} />
        </Col>
      </Row>
      <ExploreItems />
    </>
  );
};

export default Product;
