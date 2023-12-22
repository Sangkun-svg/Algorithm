class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertax) {
    if (!this.adjacencyList[vertax]) this.adjacencyList[vertax] = [];
  }

  addEdge(vertax1, vertax2) {
    this.adjacencyList[vertax1].push(vertax2);
    this.adjacencyList[vertax2].push(vertax1);
  }

  removeEdge(vertax1, vertax2) {
    this.adjacencyList[vertax1] = this.adjacencyList[vertax1].filter(
      (v) => v !== vertax2
    );
    this.adjacencyList[vertax2] = this.adjacencyList[vertax2].filter(
      (v) => v !== vertax1
    );
  }

  removeVertex(vertax) {
    while (this.adjacencyList[vertax].length) {
      const adjecencyVertex = this.adjacencyList[vertax].pop();
      this.removeEdge(vertax, adjecencyVertex);
    }
    delete this.adjacencyList[vertax];
  }

  DFSR(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    const DFS = (vertex) => {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          return DFS(v);
        }
      });
    };
    DFS(start);

    return result;
  }

  DFSI(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    visited[start] = true;

    while (stack.length) {
      let vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }

  BFS(start) {
    const result = [];
    const queue = [start];
    const visited = {};
    visited[start] = true;
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
console.log(graph);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log(graph.DFSR(1));
console.log(graph.BFS(1));
;
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

