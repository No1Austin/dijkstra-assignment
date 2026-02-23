Dijkstra’s Algorithm in JavaScript

This program implements Dijkstra’s algorithm to find the shortest distance from a starting node to all other nodes in a weighted graph.

How it works:
1. Initialize distances: start node = 0, others = Infinity.
2. Repeatedly select the unvisited node with the smallest current distance.
3. Update (relax) neighbor distances if a shorter path is found.
4. Continue until all nodes are visited or no reachable nodes remain.

Test Case:
Start node: A
Expected output:
{ A: 0, B: 4, C: 2, D: 5 }
