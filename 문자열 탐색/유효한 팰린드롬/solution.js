function solution(s) {
    let answer = "YES";
    s = s.toLowerCase().replace(/[^a-z]/g, ""); // 소문가 아닌 것들만 찾아서 빈 문자열로
    if (s.split("").reverse().join("") !== s) return "NO";
    return answer;
}

let str = "found7, time: study; Ydtus; emitU, 7Dnuof";
console.log(solution(str));