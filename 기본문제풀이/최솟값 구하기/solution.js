function solution(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (min > num) {
            min = num
        } else {
            continue;
        }
    }
    return min;
}