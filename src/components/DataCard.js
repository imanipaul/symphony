import React, { useEffect, useState } from "react";
import { Card, Skeleton, Tag, Image } from "antd";
import useFetch from "../hooks/useFetch";
import "../styles/DataCard.scss";
import { Link } from "react-router-dom";

export default function DataCard(props) {
  const { response, loading, error } = useFetch(props.url);

  useEffect(() => {
    loading && console.log("loading...");
    error && console.log("Something went wrong...Error!");
    response && console.log("response is ", response);
  }, [loading, response, error]);

  return (
    <Link to={response ? `/drink/${response.idDrink}` : "/"}>
      <Card
        hoverable
        style={{ width: 250, height: 380 }}
        loading={loading}
        className="drink-card"
      >
        <Skeleton loading={loading}>
          {response && (
            <>
              <Image src={response.strDrinkThumb} />

              <h3>{response.strDrink}</h3>
              <Tag>{response.strAlcoholic}</Tag>
              <Tag>{response.strGlass}</Tag>
              {response.strIBA && <Tag>{response.strIBA}</Tag>}
            </>
          )}
        </Skeleton>
      </Card>
    </Link>
  );
}
