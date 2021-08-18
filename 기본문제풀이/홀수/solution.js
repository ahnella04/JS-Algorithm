function solution(arr) {
    let answer = [];
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            answer.push(num)
        }
    }

    let min = Math.min(...answer);
    sum = answer.reduce((pre, cur) => pre + cur)
    console.log(sum)
    return min;
}