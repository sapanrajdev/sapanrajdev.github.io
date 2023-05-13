import { IArticle } from "../interfaces/ListingPage";

/**
 *
 * @param limit upto desired sequence
 * @returns the array of sequential number
 */
const generateSequentialArray = (limit: number) => {
  const result = [];
  for (let i = 1; i <= limit; i++) {
    result.push(i);
  }
  return result;
};

/**
 *
 * @param searchBy text to search elements from the list
 * @param list array of elements
 * @returns the list of element with match from searchBy text.
 */
const getSerchResults = (searchBy: string, list: IArticle[]) => {
  return list
    .flat()
    .filter((value) =>
      value.name.toLowerCase().includes(searchBy.toLowerCase())
    );
};

export { generateSequentialArray, getSerchResults };
