import React, { Component } from "react";
import Lottie from 'react-lottie';

class FeelingProud extends Component {
  render() {
    const { animationData } = this.props;

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      },
    };

    return (
      <Lottie
        options={defaultOptions}
        style={{
          marginTop: "-70px"
        }}
      />
    );
  }
}

export default FeelingProud;
