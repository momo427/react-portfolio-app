import React, { useState } from 'react';
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <><Header/><Footer/></>;
    }
    if (currentPage === 'Project') {
      return <><Project/><Footer/></>;
    }
    if (currentPage === 'Resume') {
      return <><Resume/><Footer/></>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}