import { Tag, Image } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Drink(props) {
  let [ingredients, setIngredients] = useState([]);
  let { id } = useParams();
  let history = useHistory();
  const { response, loading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  useEffect(() => {
    response && console.log("individual drink response", response);
    response && displayIngredients(response);
  }, [response]);

  const displayIngredients = (data) => {
    let done = false;
    let val = 1;
    let hold = [];

    while (!done) {
      if (data[`strIngredient${val}`]) {
        console.log(`ingredient ${val} is`, data[`strIngredient${val}`]);
        console.log(
          `measurement ${val} is`,
          data[`strMeasure${val}`] ? data[`strMeasure${val}`] : null
        );
        hold.push({
          measurement: data[`strMeasure${val}`],
          ingredient: data[`strIngredient${val}`],
        });
      } else {
        done = true;
      }

      val++;
    }

    console.log("hold is", hold);
    setIngredients(hold);
  };

  return (
    <div className="drink">
      Drink Page
      {response && (
        <>
          <h3>{response.strDrink}</h3>
          <Image src={response.strDrinkThumb} />
          <Tag>{response.strAlcoholic}</Tag>
          <Tag>{response.strCategory}</Tag>
          <Tag>{response.strGlass}</Tag>
          {response.strIBA && <Tag>{response.strIBA}</Tag>}
          {ingredients &&
            ingredients.map((element, index) => {
              return (
                <React.Fragment key={index}>
                  {" "}
                  <p>{element.measurement}</p> <p>{element.ingredient}</p>
                </React.Fragment>
              );
            })}
        </>
      )}
      <br />
      <button type="button" onClick={() => history.push("/home")}>
        Go Home
      </button>
    </div>
  );
}
