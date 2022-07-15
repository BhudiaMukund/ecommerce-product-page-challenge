import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cart from "./Cart";

function Header({ items, setItems }) {
  const [showCart, setShowCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (items > 0) {
      document.getElementById("numItems").style.display = "initial";
    } else if (items == 0) {
      document.getElementById("numItems").style.display = "none";
    }
  }, [items]);
  return (
    <Container>
      <MobileWrapper>
        <MenuBtn
          src="/images/icon-menu.svg"
          onClick={() => setMobileMenu(true)}
        />
        <MenuContent mobileMenu={mobileMenu}>
          <article className="menuContainer">
            <div className="closeIcon" onClick={() => setMobileMenu(false)}>
              <img src="/images/icon-close.svg" alt="Close Menu" />
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </article>
        </MenuContent>
      </MobileWrapper>
      <div className="logoWrapper">
        <LogoImg src="/images/logo.svg" />
      </div>
      <DesktopWrapper>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </DesktopWrapper>
      <User>
        <div className="cartContainer">
          <span id="numItems" className="numItems" items={items}>
            {items}
          </span>
          <div className="iconContainer" onClick={() => handleCart()}>
            <svg
              className="cartIcon"
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>{" "}
          </div>
          <Cart
            id="cartInfo"
            items={items}
            setItems={setItems}
            showCart={showCart}
          />
        </div>
        <Avatar>
          <img src="/images/image-avatar.png" alt="User Avatar" />
        </Avatar>
      </User>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b6bcc8;
  padding: 28px 15px;
  @media only screen and (max-width: 900px) {
    padding: 12px 5px;
    border: none;
    margin-bottom: 0px;
    .logoWrapper {
      flex: 1;
      margin-left: 20px;
    }
  }
`;

const MobileWrapper = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
const MenuBtn = styled.img``;

const MenuContent = styled.div`
  display: ${(props) => (props.mobileMenu ? "initial" : "none")};
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 60%);

  article {
    padding: 20px 20px;
    position: absolute;
    z-index: 10;
    background-color: white;
    width: 60%;
    max-width: 300px;
    min-width: 150px;
    height: 100%;
    .closeIcon > img {
      filter: invert(44%) sepia(19%) saturate(293%) hue-rotate(178deg)
        brightness(92%) contrast(87%);
    }

    .links ul {
      list-style: none;
      margin-top: 45px;

      li {
        margin: 20px 0;
      }

      li > a {
        text-decoration: none;
        color: black;
        font-weight: 700;
      }
    }
  }
`;

const LogoImg = styled.img``;

const DesktopWrapper = styled.div`
  flex: 1;
  margin-left: 15px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 28px;

    li {
      margin: 0 10px;
      position: relative;
      height: 100%;

      a {
        text-decoration: none;
        color: #68707d;
        &:hover {
          color: black;
          cursor: pointer;
        }
      }

      &:hover {
        ::before {
          position: absolute;
          content: "";
          background: #ff7d1a;
          top: 60px;
          left: 0;
          right: 0;
          bottom: -44px;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .cartContainer {
    .iconContainer {
      cursor: pointer;
      &:hover {
        .cartIcon path {
          fill: black;
        }
      }
    }

    span.numItems {
      position: relative;
      font-size: 12px;
      left: 8px;
      top: 8px;
      background: #ff7d1a;
      padding: 1px 9px;
      border-radius: 30px;
      font-weight: 700;
      color: white;
    }
  }

  @media only screen and (max-width: 900px) {
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 35px;

  @media only screen and (max-width: 900px) {
    height: 30px;
    width: 30px;
    margin-left: 18px;
  }

  &:hover {
    border: 3px solid #ff7d1a;
    transition: all 250ms;
  }

  img {
    width: 100%;
    cursor: pointer;
  }
`;
