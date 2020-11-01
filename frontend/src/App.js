import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Route path={'/'} exact component={HomeScreen} />
          <Route path={'/product/:id'} component={ProductScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
