import React, { useEffect } from "react";
import { Card, Skeleton, Tag, Image, Avatar } from "antd";
import useFetch from "../hooks/useFetch";
import placeholderImage from "../images/default-placeholder.png";

export default function DataCard(props) {
  const { response, loading, error } = useFetch(props.url);

  useEffect(() => {
    loading && console.log("loading...");
    error && console.log("Something went wrong...Error!");
    response && console.log("response is ", response.drinks[0]);
  }, [loading, response]);

  let loadingTest = true;
  const { Meta } = Card;
  return (
    <div>
      <Card hoverable style={{ width: 250 }} loading={loading}>
        <Skeleton loading={loading}>
          {response && (
            <>
              <Image src={response && response.drinks[0].strDrinkThumb} />
              <h3>{response && response.drinks[0].strDrink}</h3>
              <Tag>{response && response.drinks[0].strAlcoholic}</Tag>
              <Tag>{response && response.drinks[0].strGlass}</Tag>
              <Tag>{response && response.drinks[0].strIBA}</Tag>
            </>
          )}
        </Skeleton>
      </Card>
    </div>
  );
}
