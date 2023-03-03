import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageData } from "../../assets/data";
import Image from "react-bootstrap/Image";

const Mywork = () => {
  console.log(`${ImageData[2].src}`);
  const img = ["../../assets/profile.jpeg"];
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
  const Images = ({ src }) => (
    <Image
      alt={`cover of`}
      src={src}
      rounded
      style={{ width: "100%", display: "block" }}
    />
  );
  const ImageDisplay = () => <>{ImageData.map(Images)}</>;
  return (
    <Container>
    <Masonry columnsCount={4} gutter="10px">
      {/* <ImageDisplay /> */}
      {ImageData.map((image, i) => (
        <Image key={i} src={image.src} style={{ width: "100%", display: "block" }} />
      ))}
    </Masonry>
     </Container>
  );
};

export default Mywork;
