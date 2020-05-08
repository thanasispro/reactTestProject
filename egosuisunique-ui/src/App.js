import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/login.component'
import Welcome from './components/welcome/welcome.component'
import { auth } from './firebase/firebase.utils';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribe = null;

  componentDidMount() {
   this.unsubscribe =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user})
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Switch>
         <Route exact path='/' component={ Login }></Route>
         <Route exact path='/welcome' component= { Welcome}></Route>
        </Switch>
      </ApolloProvider>
    );
  }
 
}

export default App;
