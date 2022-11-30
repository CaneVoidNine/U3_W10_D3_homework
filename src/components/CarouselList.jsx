import React from "react";
import SingleCarousel from "./SingleCarousel";

export default function CarouselList() {
  return (
    <div>
      <SingleCarousel search="Action" />
      <SingleCarousel search="Horror" />
      <SingleCarousel search="Anime" />
    </div>
  );
}
