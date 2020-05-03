import React, {useState} from 'react';
//material components

//created components
import { TopBar } from '../AppBar/TopBar';
import { Browse } from '../BrowsePage/Browse';

interface Props {
  user: string;
}



export const Main = ({user}: Props) => {
  const [currentPage, changePage] = useState("Browse");

  function renderPage(){
    if(currentPage === "Browse") {
      return <Browse />;
    }

    if(currentPage === "Upload") {
      return <div>upload</div>;
    }

    if(currentPage === "Your Posts") {
      return <div>ur posts</div>;
    }

  }

  return (
    <div>
      <TopBar changePage={(page) => changePage(page)} />
      {renderPage()}
    </div>
  )
};
