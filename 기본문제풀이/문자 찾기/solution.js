function solution(str, s) {
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === s) {
            answer++;
        }
    }
    return answer;
}