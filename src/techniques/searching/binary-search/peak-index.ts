function peakIndexInMountainArray(arr: number[]): number {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < arr[mid + 1]) left = mid + 1;
        else right = mid;
    }
    return left;
}

console.log(peakIndexInMountainArray([0,1,0])); // 1