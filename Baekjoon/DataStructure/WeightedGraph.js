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
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) this.list[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.list[vertex1].push({ node: vertex2, weight: weight });
    this.list[vertex2].push({ node: vertex1, weight: weight });
  }

  Dijkstra(start, end) {
    const nodes = new PriorityQueue(); // 시각용 그래프 대신 사용되는 큐
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;
    //build up initial state
    for (const vertex in this.list) {
      previous[vertex] = null;
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }
    // 방문할 것이 남아있다면
    while (nodes.values.length) {
      smallest = nodes.dequeue().val; // 가장 우선순위
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        // this.list[smallest] : 가장 우선순위와 연결된 정점들
        for (const vertex in this.list[smallest]) {
          let nextNode = this.list[smallest][vertex];
          let candidate = distances[smallest] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            // updating new smallest distance to vertex
            distances[nextNode.node] = candidate;
            // update previous - How wo got ro vertex
            previous[nextNode.node] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    console.log("nodes : ", nodes);
    console.log("distances : ", distances);
    return path.concat(smallest).reverse();
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

console.log(graph.Dijkstra("A", "E"));
