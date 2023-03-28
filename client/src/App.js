import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from "./pages/Login";
import MainContainer from "./components/mainContainer";
import Signup from "./pages/Signup";
import ProductReviews from "./components/ProductReview";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          
          <Routes>
            
            <Route path="/" element= {<MainContainer/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/product-reviews" element={<ProductReviews />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
