import React, { useState, useEffect } from "react";
import DataCard from "../components/DataCard";
import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="home">
      <h2>Popular Drinks</h2>
      <section className="drinks">
        <DataCard url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007" />
        <DataCard url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000" />
        <DataCard url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178325" />
        <DataCard url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001" />
      </section>
    </div>
  );
}
