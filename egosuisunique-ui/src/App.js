import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login.component'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Login></Login>
    </ApolloProvider>
  );
}

export default App;
