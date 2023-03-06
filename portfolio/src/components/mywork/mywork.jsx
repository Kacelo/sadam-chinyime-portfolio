import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageData } from "../../assets/data";
import Image from "react-bootstrap/Image";
import { useRef } from "react";

const MAXWIDTH = "1024px";

const Mywork = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    console.log(handleWindowResize);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const masonryOprions = {
    fitWidth: false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: ".photo-item",
  };
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Container>
        <Masonry
          columnsCount={
            windowSize.innerWidth < 500
              ? 1
              : windowSize.innerWidth <= 1024
              ? 3
              : 4
          }
          gutter="10px"
        >
          {/* <ImageDisplay /> */}
          {ImageData.map((image, i) => (
            <Image
              key={i}
              src={image.src}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
    </Container>
  );
};

export default Mywork;
