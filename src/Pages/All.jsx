import React from "react";
import Card from "../Components/Card";
import Tabs from "../Components/Tabs";

const All = ({ dataApi }) => {
  return (
    <div>
      <div className="container">
        <Tabs />
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3 p-2">
          {dataApi.map((element, index) => {
            return (<Card element={element} index={index} />);
          })}
        </div>
      </div>
    </div>
  );
};

export default All;
