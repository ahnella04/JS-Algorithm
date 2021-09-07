function solution(arr) {
    let answer = 0, cnt = 0;
    for (let i of arr) {
        if (i === 1) {
            cnt++;
            answer += cnt;
        } else {
            cnt = 0;
        }
    }
    return answer;
}