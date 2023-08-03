import React, { Component } from "react";
import Greeting from "../../containers/greeting/Greeting";

class Home extends Component {
  render() {
    return (
      <div>
        <Greeting theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
