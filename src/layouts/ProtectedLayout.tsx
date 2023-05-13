import React from "react";
import Header from "../lib/Header";
import { IProtected } from "../interfaces/ListingPage";

function ProtectedLayout(props: IProtected) {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default ProtectedLayout;
