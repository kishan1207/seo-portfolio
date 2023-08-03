import React, { Component } from "react";
import Lottie from 'react-lottie';
import animationData from '../../assests/lotties/boost-seo.json';

class FeelingProud extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const theme = this.props.theme;
    return (
      <Lottie
        options={defaultOptions}
      />
    );
  }
}

export default FeelingProud;
