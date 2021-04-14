import React from "react";
import "./post-list-item.css";


const PostListItem = ({ label, important = false }) => { //important - new class (default - true)
  let classNames = "app-list-item d-flex justify-content-between";
  if (important) { // important - true
    classNames += " important"; // add new class (select item)
  }
  return (
    <div className={classNames}>
      <span className="app-list-item-label">{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};
export default PostListItem;
