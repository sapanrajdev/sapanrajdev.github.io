import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedLayout from "../layouts/ProtectedLayout";
import { ListingPageContainer } from "../containers";

const MainRoutes = () => {
  return (
    <ProtectedLayout>
      <Routes>
        <Route path="/" element={<ListingPageContainer />} />
      </Routes>
    </ProtectedLayout>
  );
};
export default MainRoutes;
