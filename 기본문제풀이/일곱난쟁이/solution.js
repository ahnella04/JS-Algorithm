function solution(arr) {
    let sum = arr.reduce((a, b) => a + b, 0); // 0 초기값
    let answer = arr;
    for (let i = 0; i < answer.length - 1; i++) {
        for (let j = i + 1; j < answer.length; j++) {
            if ((sum - (arr[i] + arr[j])) === 100) {
                arr.splice(j, 1); // 뒤 숫자부터 지우기
                arr.splice(i, 1);
            }
        }
    }
    return answer;
}