import React, { Component, createRef } from "react";
import { DataSet, Network } from 'vis-network/standalone';
import '../NetworkTopology/Topology.css'

// create an array of nodes
var nodes = new DataSet([
  {id: 1, label: "Node 1"},
  {id: 2, label: "Node 2"},
  {id: 3, label: "Node 3"},
  {id: 4, label: "Node 4"},
  {id: 5, label: "Node 5"},
]);

// create an array of edges
var edges = new DataSet([
  {from: 1, to: 3},
  {from: 1, to: 2},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 3, to: 3},
]);

// Provide the data in the vis format
const data = {
  nodes: nodes,
  edges: edges
};

const options = {
  autoResize: true,
  height: '100%',
  width: '100%'
};

// Initialize your network!
class NetworkTopology extends Component {
  constructor() {
    super();
    this.network = {};
    this.appRef = createRef();
  }

  componentDidMount() {
    this.network = new Network(this.appRef.current, data, options);
  }

  render() {    
    return (
       <div class="networkStyle" ref={this.appRef} />   
    );
    }    
}

export default NetworkTopology;