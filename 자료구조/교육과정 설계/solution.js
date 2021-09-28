function solution(need, plan) {
    let answer = "YES";
    let queue = need.split("");
    for (let x of plan) {
        if (queue.includes(x)) {
            if (x !== queue.shift()) return "NO";
        }
    }
    if (queue.length > 0) return "NO";
    return answer;
}

let need = "CBA";
let plan = "CBDAGE";
console.log(solution(need, plan))