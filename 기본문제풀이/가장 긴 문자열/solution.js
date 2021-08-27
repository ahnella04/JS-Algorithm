function solution(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (let key of arr) {
        if (max < key.length) {
            max = key.length
            answer = key
        }
    }
    return answer;
}