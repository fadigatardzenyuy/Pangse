
import './App.css';
import Header from './Components/Header/header';
import Hero from './Components/Hero/hero';
import React, { useState } from 'react';

function App() {
  // State to manage the sidebar's visibility
  const [sidebar, setSidebar] = useState(false);

  // Function to toggle the sidebar's visibility
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="App">
      {/* Pass the handleSidebar function to the Header component */}
      <Header handleSidebar={handleSidebar} />
      {/* Pass the sidebar state to the Hero component */}
      <Hero sidebar={sidebar} />
    </div>
  );
}

export default App;
