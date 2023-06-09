import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import { data } from "../../data.js";

const List = () => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
