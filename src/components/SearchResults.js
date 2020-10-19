import { List, Avatar } from "antd";
import React from "react";
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
              title={<a href="#">{item.strDrink}</a>}
              description={item.strCategory}
            />
          </List.Item>
        )}
      />
    </section>
  );
};

export default SearchResults;
