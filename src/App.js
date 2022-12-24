import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './countainers/Products';
import FavoritesPage from './countainers/Favorites';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </React.Fragment>
  );
};
export default App;