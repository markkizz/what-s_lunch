import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Search.module.css";
import FilterBar from '../../components/FilterBar/FilterBar'

export class Search extends Component {
  render() {
    return (
      <div className={style.Bg}>
        <Navbar />
        <FilterBar />
      </div>
    );
  }
}

export default Search;
