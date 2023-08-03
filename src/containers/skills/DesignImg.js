import React, { Component } from "react";
import Lottie from 'react-lottie';
import animationData from '../../assests/lotties/main-seo-lottie.json';

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <Lottie
        options={defaultOptions}
      />
    );
  }
}
