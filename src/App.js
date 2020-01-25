import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { auth } from './firebase/firebase.utils';

// const HatsPage = () => (
//   <div>
//     <h1> Hats page </h1>
//   </div>
// );
// import Instagrammer from './pages/instagram-page'; 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          
        });
        console.log(this.state);
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <main>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/login' component={LoginPage} />
          </main>
          {/* <Route exact path='/hats' component={ HatsPage }/> */}
        </Switch>
        {/* For Creating images with colorful drop-shadow */}
        {/* <Instagrammer />  */}
      </div>
    );
  }
}

export default App;