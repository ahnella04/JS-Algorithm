function solution(s) {
    let answer;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return "NO";
            stack.pop();
        }
    }

    if (stack.length === 0) {
        answer = "YES"
    } else {
        answer = "NO"
    }

    return answer;
}

let str = "(()(()))(()";
console.log(solution(str))