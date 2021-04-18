import {DataSet, Network} from 'vis-network/standalone'

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

var container = document.getElementById("myNetwork");
var data = {
    nodes: nodes,
    edges: edges,
};

var options = {};
var network = new Network(container, data, options);