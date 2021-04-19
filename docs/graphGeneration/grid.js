import '../network';

// these control the size of the grid
const GRID_ROWS = 15;
const GRID_COLS = 50;

function getNewGridGraph() {
    // reset edges and nodes
    nodes.clear();
    edges.clear();

    // create number of nodes in grid
    for (var i = 0; i < GRID_COLS*GRID_ROWS; i++) {
        nodes.add({id: i, label: "Node " + i});
    }

    // set edges along boundary edges
    for (var i = 0; i < GRID_ROWS; i++) {
        for (var j = 0; j < GRID_COLS; j++) {

        }
    }
}