import { Dispatch } from "@reduxjs/toolkit";
import {
  generateSequentialArray,
  getSerchResults,
} from "../../helpers/helpers";
import { ACTION_TYPES } from "../../constants/constants";
import { IAllAritcle } from "../../interfaces/ListingPage";

/**
 *
 * @param page a number to get the data of that specified Page
 * @returns the list of contents
 */
export const getArticles = (page: number) => {
  return async (dispatch: Dispatch) => {
    import(`../../assets/mocks/CONTENTLISTINGPAGE-PAGE${page}.json`)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.LIST_SUCCESS,
          payload: response.page,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: ACTION_TYPES.LIST_FAILURE,
          payload: error.message,
        });
      });
  };
};

/**
 *
 * @param searchBy a text by list will be filtered out
 * @param allAritcle props takes count and per page details to calculate the pages and get the details
 * @returns returns the list of contents from searchBy text
 */
export const getAllArticles = (
  searchBy: string,
  { totalCount, itemsPerPage }: IAllAritcle
) => {
  return async (dispatch: Dispatch) => {
    const totalPages = searchBy.length
      ? Math.round(totalCount / itemsPerPage)
      : 1;

    Promise.all(
      generateSequentialArray(totalPages).map((page) => {
        // dynamically import the file and fetch the JSON
        return import(`../../assets/mocks/CONTENTLISTINGPAGE-PAGE${page}.json`);
      })
    ).then((response) => {
      dispatch({
        type: ACTION_TYPES.SEARCH_SUCCESS,
        payload: getSerchResults(searchBy, [
          ...response.map(
            (articleContent: { page: { [x: string]: { content: any } } }) =>
              articleContent.page["content-items"].content
          ),
        ]),
      });
    });
  };
};

/**
 *
 * @param isSearch is a boolean value to set
 * @returns the boolean value to toggle search input box
 */
export const setSearchEnable = (isSearch: boolean) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES.IS_SEARCH,
      payload: isSearch,
    });
  };
};
