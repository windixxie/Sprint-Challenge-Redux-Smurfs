import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";

import { fetchSmurf, addSmurf, deleteSmurf } from "../actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/form">Form</NavLink>
        </nav>
        <h1>Welcome to Smurfland!</h1>
        <Route
          exact path="/"
          render={properties => <Smurfs {...properties} {...this.props} />}
        />
        <Route
          path="/form"
          render={properties => <SmurfForm {...properties} {...this.props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
});

export default withRouter(connect(
  mapStateToProps,
  { fetchSmurf, addSmurf, deleteSmurf },
)(App));