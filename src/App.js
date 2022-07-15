import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Slideshow from "./components/Slideshow";
import SlideshowMobile from "./components/SlideshowMobile";
import styled from "styled-components";

function App() {
  const [lockNumItems, setLockNumItems] = useState(0);
  const [itemExists, setItemExists] = useState(false);
  const [mainImg, setMainImg] = useState("/images/image-product-1.jpg");
  const [carousel, setCarousel] = useState(false);
  return (
    <div className="App">
      <Header items={lockNumItems} setItems={setLockNumItems} />
      <MobileImageWrapper>
        <SlideshowMobile />
      </MobileImageWrapper>
      <Main
        mainImg={mainImg}
        setMainImg={setMainImg}
        lockNumItems={lockNumItems}
        setLockNumItems={setLockNumItems}
        itemExists={itemExists}
        setItemExists={setItemExists}
        setCarousel={setCarousel}
      />
      <Slideshow
        mainImg={mainImg}
        visible={carousel}
        setCarousel={setCarousel}
      />
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mukund Bhudia</a>.
      </div>
    </div>
  );
}

export default App;

const MobileImageWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
    display: initial;
  }
`;
