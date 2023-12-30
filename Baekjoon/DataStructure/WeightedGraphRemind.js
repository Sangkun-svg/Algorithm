class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort();
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
    let path = [];
    let currentNode;
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
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
      if (currentNode || distances[currentNode] !== Infinity) {
        for (let neighbor in this.adjacencyList[currentNode]) {
          let nextNode = this.adjacencyList[currentNode][neighbor];
          let candidate = distances[currentNode] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = currentNode;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    // while (nodes.values.length) {
    //   currentNode = nodes.dequeue().val;
    //   if (currentNode === end) {
    //     while (previous[currentNode]) {
    //       path.push(currentNode);
    //       currentNode = previous[currentNode];
    //     }
    //     break;
    //   }
    //   if (distances[currentNode] !== Infinity) {
    //     for (const adjNodeIdx in this.adjacencyList[currentNode]) {
    //       let adjNode = this.adjacencyList[currentNode][adjNodeIdx];
    //       let newDist = distances[currentNode] + adjNode.weight;
    //       if (newDist < distances[adjNode.node]) {
    //         distances[adjNode.node] = newDist;
    //         previous[adjNode.ndoe] = currentNode;
    //         nodes.enqueue(adjNode.node, newDist);
    //       }
    //     }
    //   }
    // }
    console.log(path.concat(currentNode).reverse());
    return path;
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

graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]
