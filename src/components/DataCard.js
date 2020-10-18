import React, { useEffect, useState } from "react";
import { Card, Skeleton, Tag, Image } from "antd";
import useFetch from "../hooks/useFetch";
import "../styles/DataCard.scss";
import { Link } from "react-router-dom";

export default function DataCard(props) {
  const { response, loading, error } = useFetch(props.url);
  const [selectedDrink, setSelectedDrink] = useState(null);

  useEffect(() => {
    loading && console.log("loading...");
    error && console.log("Something went wrong...Error!");
    response && console.log("response is ", response.drinks[0]);
    selectedDrink && console.log("selected drinks is", selectedDrink);
  }, [loading, response, error]);

  return (
    <Link to={response ? `/drink/${response.drinks[0].idDrink}` : "/"}>
      <Card
        hoverable
        style={{ width: 250, height: 380 }}
        loading={loading}
        className="drink-card"
        onClick={() => setSelectedDrink(response.drinks[0].idDrink)}
      >
        <Skeleton loading={loading}>
          {response && (
            <>
              <Image src={response.drinks[0].strDrinkThumb} />

              <h3>{response.drinks[0].strDrink}</h3>
              <Tag>{response.drinks[0].strAlcoholic}</Tag>
              <Tag>{response.drinks[0].strGlass}</Tag>
              {response.drinks[0].strIBA && (
                <Tag>{response.drinks[0].strIBA}</Tag>
              )}
            </>
          )}
        </Skeleton>
      </Card>
    </Link>
  );
}
