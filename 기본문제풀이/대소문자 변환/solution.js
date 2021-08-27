function solution(str) {
    let answer = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
            // console.log(str[i])
            answer += str[i].toUpperCase()
        } else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            answer += str[i].toLowerCase();
        }
    }
    return answer;
}