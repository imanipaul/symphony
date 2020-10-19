import { List, Avatar } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchResults.scss";

const SearchResults = (props) => {
  return (
    <section className="results">
      Search Results
      <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`${item.strDrinkThumb}/preview`} />}
              title={
                <Link onClick={props.closeModal} to={`/drink/${item.idDrink}`}>
                  {item.strDrink}
                </Link>
              }
              description={item.strCategory}
              //   onClick={props.closeModal()}
            />
          </List.Item>
        )}
      />
    </section>
  );
};

export default SearchResults;
