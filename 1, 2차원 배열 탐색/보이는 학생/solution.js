function solution(arr) {
    let answer = 1;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            answer++;
            max = arr[i];
        }
    }
    return answer;
}