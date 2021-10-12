import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import OrderReview from './Components/OrderReview/OrderReview';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import Thankyou from './Components/Thankyou/Thankyou';
import AuthProvider from './Context/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>
            <PrivateRoute path="/thankyou">
              <Thankyou />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
