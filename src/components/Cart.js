import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Cart({ items, setItems, showCart }) {
  const [cartEmpty, setCartEmpty] = useState(true);

  const deleteItem = () => {
    setItems(0);
  };

  useEffect(() => {
    if (items > 0) {
      setCartEmpty(false);
      document.getElementById("cartItems").style.display = "flex";
      document.getElementById("emptyCart").style.display = "none";
    } else if (items == 0) {
      setCartEmpty(true);
      document.getElementById("cartItems").style.display = "none";
      document.getElementById("emptyCart").style.display = "flex";
    }
  }, [items]);
  return (
    <Container id="cartContainer" showCart={showCart}>
      <h1>Cart</h1>
      <hr />
      <article id="cartItems" className="cartItems">
        <div className="imgContainer">
          <img src="/images/image-product-1.jpg" alt="Product Image" />
        </div>
        <div className="itemDetails">
          <span>Fall Limited Edition Sneakers</span>
          <span>
            $125.00 x {items}{" "}
            <span id="totalPrice">{`$${125 * Number(items)}`}</span>
          </span>
        </div>
        <img
          className="deleteIcon"
          src="/images/icon-delete.svg"
          alt="Delete Icon"
          onClick={() => deleteItem()}
        />
      </article>
      <Checkout cartEmpty={cartEmpty}>Checkout</Checkout>
      <article id="emptyCart">
        <h1>Your Cart is Empty</h1>
      </article>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  width: 295px;
  height: 225px;
  position: absolute;
  top: 85px;
  right: 100px;
  background: white;
  width: 100%;
  max-width: 345px;
  box-shadow: 0px 8px 20px -8px #00000061;
  border-radius: 12px;
  padding: 18px 15px;
  overflow: hidden;
  display: ${(props) => (props.showCart ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 900px) {
    position: absolute;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    z-index: 100;
    top: 75px;
  }

  h1 {
    font-size: 15px;
    width: 100%;
    color: #1d2025;
    padding: 6px 4px;
  }

  hr {
    margin-top: 12px;
    height: 0.05px;
    background-color: #b6bcc8;
    width: 125%;
    margin-left: -15%;
    border: 0.05px solid #b6bcc8;
    opacity: 50%;
  }

  article.cartItems {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .imgContainer {
      width: 15%;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }

    .itemDetails {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 12px;
      color: #68707d;
      font-size: 15px;

      #totalPrice {
        font-weight: 700;
        color: black;
      }
    }

    .deleteIcon {
      height: 16px;
      cursor: pointer;
      &:hover {
        transform: translateY(2px);
      }
    }
  }

  #emptyCart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin: auto;
      width: max-content;
    }
  }
`;

const Checkout = styled.button`
  outline: none;
  border: none;
  background: #ff7d1a;
  padding: 15px 15px;
  width: 90%;
  color: white;
  font-family: inherit;
  font-weight: 700;
  font-size: 15px;
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
  display: ${(props) => (props.cartEmpty ? "none" : "initial")};

  &:hover {
    cursor: pointer;
    opacity: 75%;
  }
`;
