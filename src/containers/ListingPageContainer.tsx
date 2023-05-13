import React, { useCallback, useEffect, useRef, useState } from "react";

import { connect } from "react-redux";
import { getArticles } from "../store/actions/listingPage";
import { IArticle, IListingContainer } from "../interfaces/ListingPage";
import { Article } from "../lib/Article";

const ListingPageContainer = ({
  getArticles,
  articleList,
}: IListingContainer) => {
  const [page, setPage] = useState(1);
  const observerTarget = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getArticles(page);
  }, [page]);

  /**
   * callbackObserver: used to check the intersection in infinite scrolling, if it reaches to the end of the page
   * it will increment the page by 1
   */
  const callbackObserver = useCallback(() => {
    return (entries: any) => {
      const isSearch = document.getElementById("search-box");
      if (entries[0].isIntersecting && !isSearch) {
        setPage((page) => page + 1);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackObserver(), {
      threshold: 1,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <div className="container">
      <section>
        {articleList?.map((d: IArticle, index: number) => {
          return (
            <Article key={index} name={d.name} imageName={d["poster-image"]} />
          );
        })}
        {observerTarget && <div ref={observerTarget} />}
      </section>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    title: state.list.title,
    articleList: state.list.articleList,
  };
};

export default connect(mapStateToProps, { getArticles })(ListingPageContainer);
