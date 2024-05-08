import React from "react";
import { Link } from "react-router-dom";

const Card = ({ element, index }) => {
  return (
    <div>
      <div key={index}>
        <div className="card m-3">
          <div className="p-1">
            <img className="image" src={element.image} alt="" />
          </div>
          <div className="card-body">
            <h3>{element.title}</h3>
            <h6 className="mt-3">Author Name : {element.author}</h6>
            <h6 className="mt-3">Date : {element.date}</h6>  
          </div>
          <div className="text-center mb-4 sourceButton">
            <Link to={element.source} className="text-center" target='_new'>
              <button className="btn btn-success text-center">View this Blog</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
