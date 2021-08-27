// function solution(str) {
//     return str.toUpperCase();
// }

function solution(str) {
    let answer = "";
    for (let x of str) {
        let num = x.charCodeAt();
        // 대문자 아스키코드와 소문자 아스키코드의 차이는 32
        if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += x;
    }
    return answer
}