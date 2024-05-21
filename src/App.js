import React from "react";
import SearchFilter from "./components/SearchFilter";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const filter = useSelector((state) => state.global.filter);
  const preferance = useSelector((state) => state.global.preferance);
  return (
    <div className="App">
      <Header />
      {(filter || preferance) && <SearchFilter />}
      <ArticleList />
    </div>
  );
};

export default App;
