import React from "react";
import Logo from "../assets/pizza logo.png";
export default function Header() {
  return (
    <div
      style={{
        background: "black",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="pizzalogo" height="40px" />
        <div
          style={{
            marginLeft: 20,
            fontSize: 30,
            color: "green",
            fontFamily: "Alata,sans-serif",
          }}
        >
          Pizza Topping Customization
        </div>
      </div>
    </div>
  );
}
