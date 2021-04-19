// create an array of nodes
// set position to custom start for Group 9 topology.
var nodes = new vis.DataSet([
    {id: 1, label: "Router 1"},
    {id: 2, label: "Router 2"},
    {id: 3, label: "Router 3"},
    {id: 4, label: "Router 4"},
    {id: 5, label: "Router 5"},
    {id: 6, label: "Router 6"},
    {id: 7, label: "Router 7"},
    {id: 8, label: "Router 8"},
    {id: 9, label: "Router 9"},
    {id: 10, label: "Router 10"},
    {id: 11, label: "Router 11"},
]);

// create an array of edges
var edges = new vis.DataSet([
    {from: 1, to: 3, label: '6'},
    {from: 1, to: 2, label: '3'},
    {from: 1, to: 8, label: '10'},
    {from: 2, to: 3, label: '2'},
    {from: 2, to: 6, label: '6'},
    {from: 3, to: 4, label: '5'},
    {from: 4, to: 5, label: '7'},
    {from: 5, to: 6, label: '8'},
    {from: 5, to: 7, label: '9'},
    {from: 6, to: 7, label: '3'},
    {from: 6, to: 10, label: '4'},
    {from: 7, to: 8, label: '5'},
    {from: 7, to: 9, label: '4'},
    {from: 7, to: 11, label: '1'},
    {from: 8, to: 9, label: '2'},
    {from: 9, to: 11, label: '7'},
]);
  
// Provide the data in the vis format
const data = {
    nodes: nodes,
    edges: edges
};

// set options for the vis graph
const options = {
    layout: {
        randomSeed: "0.9968069182323511:1618803734894",
    }
}

// create a network by getting container
var container = document.getElementById('myGraph');

// initialize your network!
var network = new vis.Network(container, data, options);