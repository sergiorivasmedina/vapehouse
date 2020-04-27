import React, { useState, useEffect } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import config from './assets/store_config';
import Landing from './components/Landing';

import ScrollToTop from './components/ui/ScrollToTop';
import Banner from './components/ui/Banner';
import Products from './components/product/Products';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Confirm from './components/checkout/Confirm';
import Admin from './components/admin/Admin';
import Login from './components/admin/Login';

import axios from './axios';
import Producto from './components/product/Producto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: config.colors.primary.main,
      dark: config.colors.primary.dark,
      contrastText: config.colors.primary.contrastText
    },
    secondary: { main: config.colors.secondary.main },
  },
  typography: {
    fontFamily: [
      'Raleway',
      'Roboto',
      'Helvetica',
      'sans-serif'
    ]
  },
});

function App(props) {
  const [quantity, setQuantity] = useState();
  let productos = [];

  useEffect(() => {
    const slug = `${config.store_slug}_products`;
    const items = JSON.parse(localStorage.getItem(slug));
    setQuantity(items ? items.length : 0);
  }, []);

  axios.get('/productos').then(res=>{
    productos = res.data;
  })

  return (
    <StripeProvider apiKey={config.api_key}>
      <Router>
        <ScrollToTop>
          <MuiThemeProvider theme={theme}>
            <div className={config.store_slug}>
              <div className="bg" />
              <Banner quantity={quantity} config={config} />
              <Route exact path="/"
                render={(props) => <Landing config={config} />}
              />
              <Route exact path="/product"
                render={(props) => <Products config={config} />}
              />
              <Route exact path="/product/detalle/:id" component={Producto}/>
              <Route exact path="/cart"
                render={(props) => <Cart config={config} updateNumber={setQuantity} />}
              />
              <Route exact path="/checkout"
                render={(props) => <Checkout config={config} />}
              />
              <Route exact path="/confirm" component={Confirm} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/login" component={Login} />
            </div>
          </MuiThemeProvider>
        </ScrollToTop>
      </Router>
    </StripeProvider>
  );
};
export default App;