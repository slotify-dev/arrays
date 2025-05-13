/* 
Problem: Find Itinerary from a given list of tickets
Given a list of tickets, find the itinerary in order using the given list.

Note: It may be assumed that the input list of tickets is not cyclic and there is one ticket from every city except the final destination.

Examples:

Input: “Chennai” -> “Bangalore”
            “Bombay” -> “Delhi”
             “Goa”    -> “Chennai”
             “Delhi”  -> “Goa”
Output: Bombay->Delhi, Delhi->Goa, Goa->Chennai, Chennai->Bangalore


Input: “New York” -> “Chicago”
            “Denver” -> “San Francisco”
            “Chicago” -> “Denver”
            “San Francisco” -> “Los Angeles”
Output: New York -> Chicago, Chicago -> Denver, Denver -> San Francisco, San Francisco -> Los Angeles
*/
function findItinerary(tickets: string[][], start: string): string[] {
  const result: string[] = [];
  const graph = new Map<string, string[]>();

  // Build the graph
  for (const [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from)?.push(to);
  }

  // Sort the destinations in lexicographical order
  for (const destinations of graph.values()) {
    destinations.sort();
  }

  function dfs(city: string) {
    const destinations = graph.get(city);
    while (destinations.length > 0) {
      const nextCity = destinations.shift()!;
      dfs(nextCity);
    }
    result.unshift(city);
  }

  dfs(start);
  return result;
}

type Itinerary = string[];

function findItineraryWithIndegree(tickets: [string, string][]): Itinerary {
  // Create a graph (source -> destination)
  const graph = new Map<string, string>();
  // Track indegree count for each city
  const indegree = new Map<string, number>();

  // Initialize all cities in both maps
  for (const [from, to] of tickets) {
    graph.set(from, to);

    // Initialize indegree counts if not present
    if (!indegree.has(from)) indegree.set(from, 0);
    if (!indegree.has(to)) indegree.set(to, 0);

    // Increment indegree for destination
    indegree.set(to, (indegree.get(to) || 0) + 1);
  }

  // Find the starting city (indegree of 0)
  let start: string | null = null;
  for (const [city, count] of indegree) {
    if (count === 0) {
      start = city;
      break;
    }
  }

  if (!start) {
    throw new Error("No starting point found - possibly cyclic tickets");
  }

  // Reconstruct the itinerary
  const itinerary: Itinerary = [];
  let current = start;

  while (current) {
    itinerary.push(current);
    current = graph.get(current) || null;
  }

  return itinerary;
}

// Test cases
const test1: [string, string][] = [
  ["Chennai", "Bangalore"],
  ["Bombay", "Delhi"],
  ["Goa", "Chennai"],
  ["Delhi", "Goa"],
];
console.log(formatItinerary(findItineraryWithIndegree(test1)));
// Output: Bombay->Delhi, Delhi->Goa, Goa->Chennai, Chennai->Bangalore

const test2: [string, string][] = [
  ["New York", "Chicago"],
  ["Denver", "San Francisco"],
  ["Chicago", "Denver"],
  ["San Francisco", "Los Angeles"],
];
console.log(formatItinerary(findItineraryWithIndegree(test2)));
// Output: New York -> Chicago, Chicago -> Denver, Denver -> San Francisco, San Francisco -> Los Angeles
