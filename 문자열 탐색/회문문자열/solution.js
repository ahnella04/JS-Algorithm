function solution(str) {
    let answer = "YES";
    str = str.toLowerCase();
    let n = Math.floor(str.length / 2);
    for (let i =0; i < n; i++) {
        if (str[i] !== str[arr.length - i -1]) {
            answer = "NO"
            return answer;
        }
    }
    return answer;
}

// reverse 함수 사용
function solution(str) {
    let answer = "YES";
    str = str.toLowerCase();
    if(str.split("").reverse().join("") !== str) {
        return "NO";
    }
    return answer;
}

let str = "gooG"