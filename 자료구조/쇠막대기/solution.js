function solution(s) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < solution.length; i++) {
        if (s[i] === "(") stack.push(s[i]);
        else {
            stack.pop();
            if (s[i-1] === "(") answer += (stack.length);
            else answer += 1; // 막대기의 끝
        }
    }
    return answer;
}

let str = "()(((()())(())()))(())";
console.log(solution(str));