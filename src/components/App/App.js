import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SnackForm from '../SnackForm/SnackForm';
import SnackList from '../SnackList/SnackList';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <SnackForm />
          <SnackList />
          <ListItem />
        </div>
      </React.Fragment >

    );
  }
}

export default connect()(App);
