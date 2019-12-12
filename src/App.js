import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

// const HatsPage = () => (
//   <div>
//     <h1> Hats page </h1>
//   </div>
// );
// import Instagrammer from './pages/instagram-page'; 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/shop' component={ ShopPage }/>
        {/* <Route exact path='/hats' component={ HatsPage }/> */}
      </Switch>
      {/* For Creating images with colorful drop-shadow */}
      {/* <Instagrammer />  */}
    </div>
  );
}

export default App;