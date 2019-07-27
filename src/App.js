import React from 'react';
import './styles/App.scss';
import './components/shared/lazy-loading';
import HomePage from './pages/homepage.component';
// import Instagrammer from './pages/instagram-page'; 

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* For Creating images with colorful drop-shadow */}
      {/* <Instagrammer />  */}
    </div>
  );
}

export default App;