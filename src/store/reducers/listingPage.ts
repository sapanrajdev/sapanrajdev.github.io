import { ACTION_TYPES } from "../../constants/constants";
import { IListingReducer } from "../../interfaces/ListingPage";

export const initialState: IListingReducer = {
  articleList: [],
  title: "",
  isSearchEnable: false,
};

const listingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.LIST_SUCCESS: {
      return {
        ...state,
        title: action.payload.title as string,
        totalCount: action.payload["total-content-items"],
        currentPage: action.payload["page-num-requested"],
        itemsPerPage: action.payload["page-size-requested"],
        articleList: [
          ...state.articleList,
          ...action.payload["content-items"].content,
        ],
      };
    }
    case ACTION_TYPES.SEARCH_SUCCESS: {
      return {
        ...state,
        articleList: action.payload,
      };
    }
    case ACTION_TYPES.LIST_FAILURE: {
      return {
        ...state,
      };
    }

    case ACTION_TYPES.IS_SEARCH: {
      return {
        ...state,
        isSearchEnable: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default listingReducer;
