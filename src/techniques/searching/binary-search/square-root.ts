function mySqrt(x: number): number {
    if (x < 2) return x;
    let left = 1, right = x;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (mid * mid === x) return mid;
        if (mid * mid < x) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}

console.log(mySqrt(8)); // 2