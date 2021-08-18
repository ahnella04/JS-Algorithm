function solution(n, arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 === n) {
            answer += 1;
        }
    }
    return answer;
}