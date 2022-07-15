import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SlideshowMobile() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  let images = ["product-1", "product-2", "product-3", "product-4"];

  const toggleNext = () => {
    setSlideIndex(slideIndex + 1);
    if (slideIndex >= images.length - 1) {
      setSlideIndex(0);
    }
  };

  const togglePrevious = () => {
    setSlideIndex(slideIndex - 1);
    if (slideIndex <= 0) {
      setSlideIndex(images.length - 1);
    }
  };

  useEffect(() => {
    images.forEach((image, index) => {
      if (index == slideIndex) {
        setImgUrl(`images/image-${image}.jpg`);
      }
    });
  }, [slideIndex]);
  return (
    <Container>
      <div className="toggleBtn prev" onClick={() => togglePrevious()}>
        <img src="/images/icon-previous.svg" alt="Previous Image" />
      </div>
      <SlideImage src={imgUrl} />
      <div className="toggleBtn next" onClick={() => toggleNext()}>
        <img src="/images/icon-next.svg" alt="Next Image" />
      </div>
    </Container>
  );
}

export default SlideshowMobile;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  .toggleBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;
    position: relative;
    z-index: 2;
    padding: 10px 12px;
    img {
      height: 15px;
    }
  }

  .prev {
    margin-right: -50px;
  }

  .next {
    margin-left: -50px;
  }
`;

const SlideImage = styled.img`
  width: 100vw;
`;
