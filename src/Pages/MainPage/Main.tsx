import React, { useState, Suspense } from "react";
//material components

import { Browse } from "../BrowsePage/Browse";

//lazy load created components

const BottomBar = React.lazy(() =>
  import("../../Components/BottomBar").then(({ BottomBar }) => ({
    default: BottomBar,
  }))
);

const UserPosts = React.lazy(() =>
  import("../PostsPage/UserPosts").then(({ UserPosts }) => ({
    default: UserPosts,
  }))
);

const Upload = React.lazy(() =>
  import("../UploadPage/Upload").then(({ Upload }) => ({
    default: Upload,
  }))
);

export const Main = () => {
  const [currentPage, changePage] = useState("Browse");

  function renderPage() {
    if (currentPage === "Browse") {
      return <Browse />;
    }

    if (currentPage === "Upload") {
      return (
        <Suspense fallback={<h2>Page loadings</h2>}>
          <Upload />
        </Suspense>
      );
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
      <BottomBar changePage={(page) => changePage(page)} />
      {renderPage()}
    </div>
  );
};
