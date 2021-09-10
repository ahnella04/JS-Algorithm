// 숫자 탐색
// isNaN(x)
function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if (typeof s[i] === "number") {
            answer.push(s[i])
        }
    }
    return parseInt(answer.join(""));
}

let str = "g0en2T0s8eSoft";

function solution(str) {
    let answer = "";
    for (let x of str) {
        if (!isNaN(x)) answer += x;
    }
    return parseInt(answer);
}

function solution(str) {
    let answer = 0;
    for (let x of str) {
        if (!isNaN(x)) answer = answer * 10 + Number(x);
    }
    return answer;
} // 208