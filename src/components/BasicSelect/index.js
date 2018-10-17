import React, { Component } from 'react';
import * as d3 from "d3-selection";

import './styles.css';

const draw = data => {
  var selection = d3
    .select("#app")
    .selectAll(".bar")
    .data(data);

  selection
    .enter()
    .append("div")
    .attr("class", "bar")
    .merge(selection)
    .style("width", value => `${100 * value}px`);
}

class BasicSelect extends Component {
  componentDidMount(){
    draw([1, 2, 3, 4]);
  }

  shouldComponentUpdate(){
    return false;
  }

  render() {
    return (
      <div id="app"></div>
    )
  }
}

export default BasicSelect;



