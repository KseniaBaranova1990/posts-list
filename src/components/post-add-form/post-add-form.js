import React from "react";
import "./post-add-form.css";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        className="form-control new-post-label"
        placeholder="Add task"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
};

export default PostAddForm;
