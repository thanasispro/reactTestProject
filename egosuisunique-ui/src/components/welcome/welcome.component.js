import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../../firebase/firebase.utils";
import { graphql, ApolloProvider } from "react-apollo";
import getCategoryQuery from "../../queries/category.query";
import ApolloClient from "apollo-boost";

const category = new ApolloClient({
  uri: "http://localhost:4000/category",
});

const welcome = (props) => {
  const displayCategories = () => {
    var data = props.data;
    if (data.loading) {
      return <div> Loading Categories </div>;
    } else {
      return data.categories.map((category) => {
        return <li key={category.id}>{category.name}</li>;
      });
    }
  };

  return (
    <ApolloProvider client={category}>
      <Button onClick={() => auth.signOut()}>Log out</Button>
      <div>
        <ul id="displayCategories">{displayCategories()}</ul>
      </div>
    </ApolloProvider>
  );
};

export default graphql(getCategoryQuery)(welcome);
