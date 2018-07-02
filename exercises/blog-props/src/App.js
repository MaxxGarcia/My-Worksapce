import React from 'react';
import Header from './Header';
import BlogList from './Bloglist';
import Footer from './Footer';


function App() {
  return (
    <div className="mainWrapper">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
