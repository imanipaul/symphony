import { Tag, Image, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/Drink.scss";

export default function Drink() {
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
        hold.push({
          measurement: data[`strMeasure${val}`],
          ingredient: data[`strIngredient${val}`],
        });
      } else {
        done = true;
      }

      val++;
    }

    setIngredients(hold);
  };

  return (
    <div className="drink">
      {response && (
        <>
          <h3>
            {response.strDrink} <Rate />
          </h3>
          <section className="tags">
            {response.strIBA && <Tag>{response.strIBA}</Tag>}
            <Tag>{response.strAlcoholic}</Tag>
            <Tag>{response.strGlass}</Tag>
            <Tag>{response.strCategory}</Tag>
          </section>
          <section className="content">
            <Image src={response.strDrinkThumb} />
            <div className="instructions">
              <div className="all-ingredients">
                {ingredients &&
                  ingredients.map((element, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p className="ingredients">
                          {element.measurement} {element.ingredient}
                        </p>
                      </React.Fragment>
                    );
                  })}
              </div>

              <p className="directions">{response.strInstructions}</p>
            </div>
          </section>
        </>
      )}
      <br />
      <button type="button" onClick={() => history.push("/home")}>
        Go Home
      </button>
    </div>
  );
}
