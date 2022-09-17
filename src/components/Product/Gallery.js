import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Fade } from "react-reveal";

const Gallery = ({ product }) => {
  console.log(product);
  return (
    <Fade>
      <div className="mt-5" style={{ height: "100%" }}>
        <ImageGallery
          items={product}
          defaultImage={product}
          showThumbnails={true}
          isRTL={false}
          showPlayButton={false}
          showNav={false}
          disableThumbnailScroll={true}
          // renderRightNav={RightButton}
          // renderLeftNav={LeftButton}
          showFullscreenButton={false}
          thumbnailPosition={"left"}
        />
      </div>
    </Fade>
  );
};

export default Gallery;
