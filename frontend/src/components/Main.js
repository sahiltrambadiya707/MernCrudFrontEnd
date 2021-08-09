import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Our all component files
import ListEmployee from "./ListEmployee";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
// import List from "./List";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route path="/" component={List} />
          <Route path="/list" component={List} /> */}
          <Route exact path="/" component={ListEmployee} />
          <Route path="/list" component={ListEmployee} />
          <Route path="/addemployee" component={AddEmployee} />
          <Route path="/editemployee/:id" component={EditEmployee} />
        </Switch>
      </div>
    );
  }
}

export default Main;
