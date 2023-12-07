class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertax) {
    if (!this.adjecencyList[vertax]) this.adjecencyList[vertax] = [];
  }

  removeVertex(vertax) {
    while (this.adjecencyList[vertax].length) {
      const adjecencyVertex = this.adjecencyList[vertax].pop();
      this.removeEdge(vertax, adjecencyVertex);
    }
    delete this.adjecencyList[vertax];
  }

  addEdge(vertax1, vertax2) {
    this.adjecencyList[vertax1].push(vertax2);
    this.adjecencyList[vertax2].push(vertax1);
  }
  removeEdge(vertax1, vertax2) {
    this.adjecencyList[vertax1] = this.adjecencyList[vertax1].filter(
      (v) => v !== vertax2
    );
    this.adjecencyList[vertax2] = this.adjecencyList[vertax2].filter(
      (v) => v !== vertax1
    );
  }
}

const graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los_Angeles");
graph.addVertex("Hong_Kong");
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong_Kong", "Tokyo");
graph.addEdge("Hong_Kong", "Dallas");
graph.addEdge("Los_Angeles", "Hong_Kong");
graph.addEdge("Los_Angeles", "Aspen");
console.log(graph);
graph.removeVertex("Hong_Kong");
console.log(graph);
