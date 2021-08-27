// substring(시작인덱스, 종료인덱스)
// substr(시작인덱스, 길이)
function solution(str) {
    let answer = "";
    let len = str.length;
    if (str.length % 2 !== 0) {
        answer = str.substr(str.length / 2, 1);
    } else {
        answer = str.substr(str.length / 2 - 1, 2);
    }
    return answer;
}