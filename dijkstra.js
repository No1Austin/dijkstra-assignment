function dijkstra(graph, start) {
  // 1) distances: start = 0, others = Infinity
  const distances = {};
  for (const vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  // 2) visited set
  const visited = new Set();

  // 3) Keep visiting the closest unvisited vertex
  while (visited.size < Object.keys(graph).length) {
    let currentVertex = null;
    let smallestDistance = Infinity;

    // Find the unvisited vertex with the smallest distance
    for (const vertex in distances) {
      if (!visited.has(vertex) && distances[vertex] < smallestDistance) {
        smallestDistance = distances[vertex];
        currentVertex = vertex;
      }
    }

    // If none found, remaining vertices are unreachable
    if (currentVertex === null) break;

    visited.add(currentVertex);

    // Relax edges (update neighbor distances)
    const neighbors = graph[currentVertex];
    for (const neighbor in neighbors) {
      const weight = neighbors[neighbor];
      const newDistance = distances[currentVertex] + weight;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
      }
    }
  }

  return distances;
}

// ===== TEST CODE (required for proof it works) =====
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 }
};

console.log("Shortest distances from A:");
console.log(dijkstra(graph, "A"));
