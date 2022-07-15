import { useState } from "react";
import Header from "./comopnents/Header";
import Main from "./comopnents/Main";
import Slideshow from "./comopnents/Slideshow";
import SlideshowMobile from "./comopnents/SlideshowMobile";
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
