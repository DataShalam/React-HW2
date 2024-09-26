import React from "react";
import Product from "../Product/Product.jsx";
import "./Content.css";

export default function Content() {
  return (
    <>
      <main className="main-section">
        <div className="product-container">
          <Product
            imgSrc="https://m.media-amazon.com/images/I/713eEl39eLL._AC_SX679_.jpg"
            productName="Google Pixel 8 Pro"
            productDesc="Featuring a Tensor G3 chip, the Pixel 8 Pro boasts a 6.7-inch OLED display and enhanced AI camera features."
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/81Mya-dPIOL._AC_SX679_.jpg"
            productName="Google Pixel 8"
            productDesc="Powered by the Tensor G3, the Pixel 8 offers a refined 6.2-inch OLED display, upgraded AI photography features."
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/615rI0PoyOL._AC_SX679_.jpg"
            productName="Google Pixel 7 Pro"
            productDesc="With the Tensor G2 chip, the Pixel 7 Pro offers a 6.7-inch display, triple-camera system, and a 5x optical zoom."
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/61GaroZ9M6L._AC_SX679_.jpg"
            productName="Google Pixel 7"
            productDesc="Featuring a 6.3-inch OLED display and powered by the Tensor G2 chip, the Pixel 7 provides great value with enhanced camera AI"
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/61YsYjlywtL._AC_SX679_.jpg"
            productName="Google Pixel 6 Pro "
            productDesc="The Pixel 6 Pro introduced Google’s custom Tensor chip and a 6.7-inch display."
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/61ruKkvVIxL._AC_SX679_.jpg"
            productName="Google Pixel 6"
            productDesc="Featuring a 6.4-inch display and the new Tensor chip, the Pixel 6 offers strong performance, great camera capabilities,"
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/516wyv8wYGL._AC_SX679_.jpg"
            productName="Google Pixel 5"
            productDesc="The Pixel 5 focuses on affordability and performance, featuring a Snapdragon 765G chip, 6-inch OLED display, and dual rear cameras,"
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/71C0OH4WfpL._AC_SX679_.jpg"
            productName="Google Pixel 4a 5G"
            productDesc="A budget-friendly 5G option, the Pixel 4a 5G features a Snapdragon 765G chip, a 6.2-inch OLED display"
          />
          <Product
            imgSrc="https://m.media-amazon.com/images/I/61MBRtrVz9L._AC_SX679_.jpg"
            productName="Google Pixel 4a"
            productDesc="Compact and affordable, the Pixel 4a offers a 5.81-inch display and a Snapdragon 730G chip."
          />
        </div>
      </main>
    </>
  );
}
