/* 
Problem: Most frequent element in an array
Given an array, the task is to find the most frequent element in it. 
If there are multiple elements that appear a maximum number of times, return the maximum element.

Examples: 

Input : arr[] = [1, 3, 2, 1, 4, 1]
Output : 1
Explanation: 1 appears three times in array which is maximum frequency.

Input : arr[] = [10, 20, 10, 20, 30, 20, 20]
Output : 20 appears four times in array which is maximum frequency

Input: arr[] = [1, 2, 2, 4, 1]
Output: 2
Explanation: 1 and 2 both appear two times, so return 2 as it’s value is bigger.
*/
function mostFrequentElement(arr: number[]): number {
  let maxFrequency = 0;
  let mostFrequentElement = -1;

  const frequencyMap = new Map<number, number>();

  for (const num of arr) {
    const frequency = (frequencyMap.get(num) || 0) + 1;
    frequencyMap.set(num, frequency);

    if (
      frequency > maxFrequency ||
      (frequency === maxFrequency && num > mostFrequentElement)
    ) {
      maxFrequency = frequency;
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}
