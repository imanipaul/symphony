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

  return (
    <div>
      <Card hoverable style={{ width: 250 }} loading={loading}>
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
    </div>
  );
}
