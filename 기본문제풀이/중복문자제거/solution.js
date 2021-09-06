// indexOf
function solution(str) {
    let answer = "";

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) answer += s[i];
    }
    return answer;
}