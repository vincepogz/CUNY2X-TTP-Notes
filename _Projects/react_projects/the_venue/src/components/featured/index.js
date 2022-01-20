import React, { Component } from "react";
import Carousel from "./Carousel";
import TimeUntil from "./TimeUntil.js";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <TimeUntil />
    </div>
  );
};

export default Featured;