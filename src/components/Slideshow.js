import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Slideshow({ visible, setCarousel, mainImg }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = ["product-1", "product-2", "product-3", "product-4"];

  useEffect(() => {
    let imgPassed = mainImg.slice(14, mainImg.length - 4);
    let newSlide = 0;
    images.forEach((image, index) => {
      if (image == imgPassed) {
        newSlide = index;
      }
    });
    setSlideIndex(newSlide);
  }, [mainImg]);

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

  const toggleThumbnail = (evt) => {
    let id = evt.target.id;
    let targetImg = id.slice(6, id.length);
    let newSlideIndex = 0;
    images.forEach((image, index) => {
      if (image == targetImg) {
        newSlideIndex = index;
      }
    });
    setSlideIndex(newSlideIndex);
  };

  useEffect(() => {
    images.forEach((image) => {
      document.getElementById(`slide-${image}`).style.border = "none";
    });
    document.getElementById(`slide-${images[slideIndex]}`).style.border =
      "3px solid #ff7d1a";
  }, [slideIndex]);

  return (
    <Container visible={visible}>
      <SlideshowWrapper>
        <div className="closeIcon" onClick={() => setCarousel(false)}>
          <img src="/images/icon-close.svg" alt="Close Slideshow" />
        </div>
        <SlideContainer>
          <div
            className="slideControlBtn prev"
            onClick={() => togglePrevious()}
          >
            <img src="/images/icon-previous.svg" alt="Previous Slide" />
          </div>
          <article className="mainImg">
            <img
              src={`/images/image-${images[slideIndex]}.jpg`}
              alt="Slideshow Image"
            />
          </article>
          <div className="slideControlBtn next" onClick={() => toggleNext()}>
            <img src="/images/icon-next.svg" alt="Next Slide" />
          </div>
        </SlideContainer>
        <article className="thumbnailContainer">
          <div className="thumbnail" id="slide-product-1">
            <img
              src="/images/image-product-1-thumbnail.jpg"
              id="image-product-1"
              alt="Slideshow product Image"
              onClick={toggleThumbnail}
            />
          </div>
          <div className="thumbnail" id="slide-product-2">
            <img
              src="/images/image-product-2-thumbnail.jpg"
              alt="Slideshow product Image"
              id="image-product-2"
              onClick={toggleThumbnail}
            />
          </div>
          <div className="thumbnail" id="slide-product-3">
            <img
              src="/images/image-product-3-thumbnail.jpg"
              alt="Slideshow product Image"
              id="image-product-3"
              onClick={toggleThumbnail}
            />
          </div>
          <div className="thumbnail" id="slide-product-4">
            <img
              src="/images/image-product-4-thumbnail.jpg"
              alt="Slideshow product Image"
              id="image-product-4"
              onClick={toggleThumbnail}
            />
          </div>
        </article>
      </SlideshowWrapper>
    </Container>
  );
}

export default Slideshow;

const Container = styled.div`
  background: hsla(0, 0%, 0%, 75%);
  position: absolute;
  z-index: 0;
  inset: 0;
  display: ${(props) => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const SlideshowWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  .closeIcon {
    margin-left: 475px;
    text-align: right;
    margin-bottom: 20px;
    img {
      width: 18px;
      &:hover {
        filter: invert(54%) sepia(82%) saturate(2068%) hue-rotate(348deg)
          brightness(103%) contrast(101%);
        cursor: pointer;
      }
    }
  }

  article.thumbnailContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    margin-top: 20px;

    .thumbnail {
      width: 16%;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      img {
        position: relative;
        z-index: 1;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      &:hover {
        cursor: pointer;
        img {
          opacity: 65%;
        }
        ::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: white;
          z-index: -1;
        }
        background-color: white;
      }
    }
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .slideControlBtn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      img {
        filter: invert(54%) sepia(82%) saturate(2068%) hue-rotate(348deg)
          brightness(103%) contrast(101%);
      }
    }
  }

  .next {
    margin-left: -25px;
  }
  .prev {
    margin-right: -25px;
    z-index: 2;
  }

  article.mainImg {
    width: 475px;
    height: 475px;
    img {
      object-fit: cover;
      width: 100%;
      border-radius: 10px;
    }
  }
`;
