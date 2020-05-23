import React, { useState, Suspense } from "react";
//material components

import { Browse } from "../BrowsePage/Browse";

//lazy load created components

const TopBar = React.lazy(() =>
  import("../../Components/TopBar").then(({ TopBar }) => ({
    default: TopBar,
  }))
);

const UserPosts = React.lazy(() =>
  import("../PostsPage/UserPosts").then(({ UserPosts }) => ({
    default: UserPosts,
  }))
);

export const Main = () => {
  const [currentPage, changePage] = useState("Browse");

  function renderPage() {
    if (currentPage === "Browse") {
      return (
        <Suspense fallback={<h2>Page loadings</h2>}>
          <Browse />
        </Suspense>
      );
    }

    if (currentPage === "Upload") {
      return <div>upload</div>;
    }

    if (currentPage === "Your Posts") {
      return (
        <Suspense fallback={<h2>Page loadings</h2>}>
          <UserPosts />
        </Suspense>
      );
    }
  }

  return (
    <div>
      <TopBar changePage={(page) => changePage(page)} />
      {renderPage()}
    </div>
  );
};
