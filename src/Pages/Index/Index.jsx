
import React from "react";
import banner from "../../Images/banner-header.png";
import "./header.scss";

export default function Index() {
  return (
    <header>
      <img className="banner-header" src={banner} alt="banner-header" />
    </header>
  );
}