import React, { useState } from "react";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import backButton from "../assets/icons/back.png";
import searchButton from "../assets/icons/search.png";
import navBarBg from "../assets/icons/nav_bar.png";
import { getAllArticles, setSearchEnable } from "../store/actions/listingPage";
import { IHeaderProps } from "../interfaces/ListingPage";

import "../styles/Header.scss";

/**
 *
 * @param props takes all the required fields to perform Header tasks
 * @returns the Header component with back, search functionalities
 */
const Header = ({
  title,
  totalCount,
  currentPage,
  itemsPerPage,
  getAllArticles,
  isSearchEnable,
  setSearchEnable,
}: IHeaderProps) => {
  const [searchTerm, updateSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.length < 25) {
      getAllArticles(searchTerm, { totalCount, currentPage, itemsPerPage });
    } else {
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <header style={{ backgroundImage: `url(${navBarBg})` }}>
      <button className="button" onClick={handleGoBack}>
        <img width={20} height={20} src={backButton} alt="back" />
      </button>
      <label className="header-title">{title}</label>
      {isSearchEnable ? (
        <form className="header-search" onSubmit={(e) => handleSearch(e)}>
          <input
            id="search-box"
            value={searchTerm}
            onChange={(event) => updateSearchTerm(event.target.value)}
            autoFocus
            maxLength={20}
            onBlur={() => setSearchEnable(false)}
          />
        </form>
      ) : (
        <div
          className="button search"
          tabIndex={0}
          onBlur={() => {
            setSearchEnable(false);
          }}
          onClick={() => setSearchEnable(true)}
        >
          <img width={20} height={20} src={searchButton} alt="search" />
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state: any) => {
  return {
    title: state.list.title,
    totalCount: state.list.totalCount,
    currentPage: state.list.currentPage,
    itemsPerPage: state.list.itemsPerPage,
    isSearchEnable: state.list.isSearchEnable,
  };
};

export default connect(mapStateToProps, { getAllArticles, setSearchEnable })(
  Header
);
