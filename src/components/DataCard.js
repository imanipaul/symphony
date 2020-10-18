import React, { useEffect, useState } from "react";
import { Card, Skeleton, Tag, Image } from "antd";
import useFetch from "../hooks/useFetch";
import "../styles/DataCard.scss";

export default function DataCard(props) {
  const { response, loading, error } = useFetch(props.url);
  const [selectedDrink, setSelectedDrinks] = useState(null);

  useEffect(() => {
    loading && console.log("loading...");
    error && console.log("Something went wrong...Error!");
    response && console.log("response is ", response.drinks[0]);
  }, [loading, response, error]);

  return (
    <Card
      hoverable
      style={{ width: 250, height: 380 }}
      loading={loading}
      className="drink-card"
      onClick={() =>
        console.log("clicked drink is", response.drinks[0].idDrink)
      }
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
  );
}
