import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import iphone13 from "../../assets/iphone13.png";

const ImageSlider = () => {
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/slider", { cancelToken: cancelToken.token })
      .then((res) => {
        setSliderImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <div className="carousel">
      {sliderImages.length != 0 ? (
        <Carousel>
          {sliderImages.map((slide, index) => (
            <Carousel.Item key={index} interval={3000}>
              <div className="slider_test">
                {/* use static photo instead of api because ssl */}
                <img src={iphone13} alt="First slide" />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className="holder d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
