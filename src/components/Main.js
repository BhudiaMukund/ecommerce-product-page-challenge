import React, { useState } from "react";
import styled from "styled-components";

function Main({
  lockNumItems,
  setLockNumItems,
  itemExists,
  setItemExists,
  mainImg,
  setMainImg,
  setCarousel,
}) {
  const [numItems, setNumItems] = useState(0);

  const handleSwitch = (event) => {
    setMainImg(`/images/image-${event.target.id}.jpg`);
    const arrayImages = () => {
      let images = ["product-1", "product-2", "product-3", "product-4"];
      images.forEach((image) => {
        if (image !== event.target.id) {
          document.getElementById(`wrapper-${image}`).style.border = "none";
        }
      });
    };
    arrayImages();
    document.getElementById(`wrapper-${event.target.id}`).style.border =
      "3px solid #ff7d1a";
  };

  const decrement = () => {
    if (numItems > 0) {
      setNumItems(numItems - 1);
    }
  };

  const increment = () => {
    setNumItems(numItems + 1);
  };

  const handleCartAdd = () => {
    if (itemExists) {
      setLockNumItems(lockNumItems + numItems);
    } else if (itemExists === false) {
      setLockNumItems(numItems);
      setItemExists(true);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <MainImg onClick={() => setCarousel(true)}>
          <img src={mainImg} alt="Sneakers main image" />
        </MainImg>
        <Thumbnails>
          <ThumbnailWrapper id="wrapper-product-1">
            <img
              src="/images/image-product-1-thumbnail.jpg"
              alt="Sneakers orange background"
              id="product-1"
              className="thumbnails"
              onClick={(event) => handleSwitch(event)}
            />
          </ThumbnailWrapper>
          <ThumbnailWrapper id="wrapper-product-2">
            <img
              src="/images/image-product-2-thumbnail.jpg"
              alt="fancy sneakers"
              id="product-2"
              className="thumbnails"
              onClick={(event) => handleSwitch(event)}
            />
          </ThumbnailWrapper>
          <ThumbnailWrapper id="wrapper-product-3">
            <img
              src="/images/image-product-3-thumbnail.jpg"
              alt="fancy sneakers on stones"
              id="product-3"
              className="thumbnails"
              onClick={(event) => handleSwitch(event)}
            />
          </ThumbnailWrapper>
          <ThumbnailWrapper id="wrapper-product-4">
            <img
              src="/images/image-product-4-thumbnail.jpg"
              alt="fancy sneakers on stones"
              id="product-4"
              className="thumbnails"
              onClick={(event) => handleSwitch(event)}
            />
          </ThumbnailWrapper>
        </Thumbnails>
      </ImageContainer>
      <DetailsContainer>
        <h3>Sneaker Company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price-component">
          <div className="priceWrapper">
            <span>
              <h2>$125.00</h2>
            </span>
            <span className="discount">50%</span>
          </div>
          <span className="oldPrice">$250.00</span>
        </div>
        <CartInfo>
          <NumItems>
            <span className="numControl" onClick={() => decrement()}>
              -
            </span>
            <span className="counter">{numItems}</span>
            <span className="numControl" onClick={() => increment()}>
              +
            </span>
          </NumItems>
          <CartBtn onClick={() => handleCartAdd()}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fill-rule="nonzero"
              />
            </svg>{" "}
            <span>Add to Cart</span>
          </CartBtn>
        </CartInfo>
      </DetailsContainer>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 45px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const DetailsContainer = styled.div`
  padding: 70px;

  h3 {
    text-transform: uppercase;
    font-size: 15px;
    color: #ff7d1a;
    letter-spacing: 2px;
    margin-bottom: 18px;
  }

  h1 {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 30px;
    color: #1d2025;
  }

  h2 {
    color: #1d2025;
  }

  p {
    color: #68707d;
  }

  .priceWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    span.discount {
      margin-left: 15px;
      background-color: rgba(255, 125, 26, 0.2);
      font-weight: 700;
      padding: 3px 6px;
      color: #ff7d1a;
      border-radius: 8px;
    }
  }
  span.oldPrice {
    color: #68707d;
    opacity: 75%;
    font-weight: 700;
    text-decoration: line-through;
  }
  @media only screen and (max-width: 900px) {
    padding: 30px 8px;
    h3 {
      font-size: 12px;
    }
    h1 {
      font-size: 32px;
      line-height: 35px;
      margin-bottom: 18px;
    }
    p {
      font-size: 15px;
      line-height: 18px;
    }
    .price-component {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }
    .priceWrapper {
      margin-top: 0;
    }
  }
`;
const MainImg = styled.div`
  display: flex;
  padding: 30px 0;
  justify-content: center;

  img {
    width: 85%;
    border-radius: 15px;
    &:hover {
      cursor: zoom-in;
    }
  }
`;
const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 85%;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
      opacity: 50%;
    }
  }

  #wrapper-product-1 {
    border: 3px solid #ff7d1a;
  }
`;
const ThumbnailWrapper = styled.div`
  width: 20%;
  padding-top: 0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const CartInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const NumItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  align-items: center;
  background-color: #f7f8fd;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  width: 30%;
  margin-right: 20px;
  span.numControl {
    color: #ff7d1a;
    font-size: 32px;
    margin-top: -5px;
    &:hover {
      cursor: pointer;
      opacity: 75%;
    }
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-right: 0;
  }
`;
const CartBtn = styled.button`
  width: 50%;
  background-color: #ff7d1a;
  border: none;
  outline: none;
  padding: 15px 0;
  border-radius: 12px;
  box-shadow: -1px 10px 20px 0px #ff7d1a99;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: 1.15px;
  font-size: 15px;
  span {
    margin-left: 15px;
  }

  &:hover {
    cursor: pointer;
    opacity: 75%;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 25px;
    margin-bottom: 30px;
  }
`;
