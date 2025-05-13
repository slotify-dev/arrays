/*
Problem: Find number of Employees Under every Manager
Given a 2d matrix of strings arr[][] of order n * 2, where each array arr[i] contains two strings, where the first string arr[i][0] is the employee and arr[i][1] is his manager. 
The task is to find the count of the number of employees under each manager in the hierarchy and not just their direct reports.

Note: Every employee reports to only one manager. And the CEO reports to himself. Print the result in sorted order based on employee name.

Example:

Input: arr[][] = [[A, C], [B, C], [C, F], [D, E], [E, F], [F, F]]
Output: [[A, 0], [B, 0], [C, 2], [D, 0], [E, 1], [F, 5]]

Explanation: ‘A’ and ‘B’ are reporting to ‘C’, thus for ‘C’ the count is 2. And ‘D’ is reporting to ‘E’, thus for ‘E’ the count is 1. ‘C’ and ‘E’ reporting to ‘F’ . 
Thus count for ‘F’ is 5 ( 2 under ‘C’+ 1 under ‘E’ + ‘C’ + ‘E’ )  . And no employees are reporting ‘A’, ‘B’, and ‘D’, so the count for them is 0.

Approach:
  - The idea is to store all the employees working under the manager in a HashMap
  - ind the count of employees under each manager, and at last sum them all to find the count of direct and indirect employees working under any manager. 
*/
function findEmployeesUnderManager(arr: string[][]): [string, number][] {
  const managerMap = new Map<string, string[]>();
  const employeeCount = new Map<string, number>();

  // Build the manager map and initialize employee counts
  for (const [employee, manager] of arr) {
    if (!managerMap.has(manager)) {
      managerMap.set(manager, []);
    }
    managerMap.get(manager)?.push(employee);
    employeeCount.set(employee, 0);
    employeeCount.set(manager, 0); // Initialize count for managers as well
  }

  // Function to calculate the total number of employees under a manager
  function countEmployees(manager: string): number {
    let count = 0;
    const subordinates = managerMap.get(manager) || [];
    for (const subordinate of subordinates) {
      count += countEmployees(subordinate) + 1; // +1 for the subordinate itself
    }
    employeeCount.set(manager, count);
    return count;
  }

  // Start counting from the CEO (who reports to themselves)
  for (const manager of managerMap.keys()) {
    if (manager === managerMap.get(manager)?.[0]) {
      // CEO condition
      countEmployees(manager);
    }
  }

  // Convert the result to an array and sort it by employee name
  const result: [string, number][] = Array.from(employeeCount.entries());
  result.sort((a, b) => a[0].localeCompare(b[0]));

  return result;
}

function countEmployeesUnderManager(arr: string[][]): [string, number][] {
  // Create adjacency list (manager -> direct reports)
  const hierarchy = new Map<string, string[]>();

  // Map to store the total count of employees under each person
  const employeeCount = new Map<string, number>();

  // Set to track all employees
  const employees = new Set<string>();

  // Build the hierarchy and track all employees
  for (const [employee, manager] of arr) {
    if (!hierarchy.has(manager)) {
      hierarchy.set(manager, []);
    }
    hierarchy.get(manager)!.push(employee);
    employees.add(employee);
    employees.add(manager);
  }

  // Find the CEO (the one who is their own manager)
  let ceo = "";
  for (const [employee, manager] of arr) {
    if (employee === manager) {
      ceo = employee;
      break;
    }
  }

  // DFS function to count employees under a person
  function dfs(person: string): number {
    // If we've already calculated this person's count, return it
    if (employeeCount.has(person)) {
      return employeeCount.get(person)!;
    }

    // Base case: person has no direct reports
    if (!hierarchy.has(person)) {
      employeeCount.set(person, 0);
      return 0;
    }

    let count = 0;
    // For each direct report, add 1 (the employee) plus their subordinates
    for (const subordinate of hierarchy.get(person)!) {
      count += 1 + dfs(subordinate);
    }

    employeeCount.set(person, count);
    return count;
  }

  // Calculate counts for all employees
  for (const person of employees) {
    if (!employeeCount.has(person)) {
      dfs(person);
    }
  }

  // Convert to array and sort alphabetically
  const result: [string, number][] = Array.from(employeeCount.entries());
  result.sort((a, b) => a[0].localeCompare(b[0]));

  return result;
}

// Test case
const input = [
  ["A", "C"],
  ["B", "C"],
  ["C", "F"],
  ["D", "E"],
  ["E", "F"],
  ["F", "F"],
];

console.log(countEmployeesUnderManager(input));
// Output: [ [ 'A', 0 ], [ 'B', 0 ], [ 'C', 2 ], [ 'D', 0 ], [ 'E', 1 ], [ 'F', 5 ] ]
