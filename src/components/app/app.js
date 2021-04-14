import React from "react";
import AppHeader from "../app-header/app-header";
import PostAddForm from "../post-add-form/post-add-form";
import PostList from "../post-list/post-list";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

const App = () => {
  const data = [
    // data array from server
    { label: "Going to study React", important: true },
    { label: "Wow is so fan", important: false },
    { label: "I need a break...", important: false },
  ];
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
