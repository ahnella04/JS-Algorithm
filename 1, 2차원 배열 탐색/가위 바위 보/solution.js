// 1: 가위, 2: 바위, 3: 보
function solution(arr1, arr2) {
    let answer = "";
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            answer += 'D' + ' ';
        } else if (arr1[i] === 1 && arr2[i] === 3) {
            answer += 'A' + ' ';
        } else if (arr1[i] === 2 && arr2[i] === 1) {
            answer += 'B' + ' '
        } else if (arr1[i] === 3 && arr2[i] === 2) {
            answer += 'A' + ' ';
        } else {
            answer += 'B' + ' ';
        }
        return answer;
    }
}