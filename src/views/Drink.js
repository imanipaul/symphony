import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Drink(props) {
  let { id } = useParams();
  let history = useHistory();

  return (
    <div>
      Drink Page
      <p>This is a page for a individual drink</p>
      <p>id is {id}</p>
      <button type="button" onClick={() => history.push("/home")}>
        Go Home
      </button>
    </div>
  );
}
