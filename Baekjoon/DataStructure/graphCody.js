class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const target = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, target);
    }
    delete this.adjacencyList[vertex];
  }

  DFSR(start) {
    const result = [];
    const visited = [];
    const adjacencyList = this.adjacencyList;
    const recusion = (vertex) => {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) return recusion(v);
      });
    };
    recusion(start);
    return result;
  }

  BFSI(start) {
    const result = [];
    const visited = {};
    const queue = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[vertex] = true;
          queue.push(v);
        }
      });
    }

    return result;
  }
}
