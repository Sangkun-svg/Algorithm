class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }

  Dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let currentNode;

    for (const vertex in this.adjacencyList) {
      previous[vertex] = null;
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }

    while (nodes.values.length) {
      currentNode = nodes.dequeue().val;
      if (currentNode === end) {
        while (previous[currentNode]) {
          path.push(currentNode);
          currentNode = previous[currentNode];
        }
        break;
      }
      for (const adjacencyNodeIndex in this.adjacencyList[currentNode]) {
        const adjacencyNode =
          this.adjacencyList[currentNode][adjacencyNodeIndex];
        const newDist = distances[currentNode] + adjacencyNode.weight;
        if (newDist < distances[adjacencyNode.node]) {
          distances[adjacencyNode.node] = newDist;
          previous[adjacencyNode.node] = currentNode;
          nodes.enqueue(adjacencyNode.node, newDist);
        }
      }
    }

    return path.concat(currentNode).reverse();
  }
}
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const path = graph.Dijkstra("A", "E");
console.log(path);

// ["A", "C", "D", "F", "E"]
