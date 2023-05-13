interface IListingReducer {
  articleList: IArticle[];
  title: string;
  isSearchEnable?: boolean;
}

interface IArticle {
  name: string;
  "poster-image": string;
}

interface IListingContainer extends IListingReducer {
  getArticles: (page: number) => void;
}

interface IProtected {
  children: any;
}

interface IAritcleProps {
  name: string;
  imageName: string;
}

interface IHeaderProps {
  title: string;
  totalCount: number;
  currentPage: number;
  itemsPerPage: number;
  getAllArticles: (
    searchBy: string,
    obj: { totalCount: number; currentPage: number; itemsPerPage: number }
  ) => void;
  isSearchEnable: boolean;
  setSearchEnable: (isSearch: boolean) => void;
}

interface IAllAritcle {
  totalCount: number;
  currentPage: number;
  itemsPerPage: number;
}

export {
  IListingReducer,
  IListingContainer,
  IArticle,
  IAritcleProps,
  IProtected,
  IHeaderProps,
  IAllAritcle,
};
