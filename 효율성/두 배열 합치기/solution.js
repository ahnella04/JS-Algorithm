function solution(arr1, arr2) {
    let answer;
    let n = arr1.length;
    let m = arr2.length;
    let p1 = p2 = 0;

    while(p1 < n && p2 < m) {
        // arr1[p1]을 answer에 push 해주고, p1은 1 증가
        if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++])
        // arr2[p2]을 answer에 push해주고, p2은 1 증가
        else answer.push(arr2[p2++])
    }

    while (p1 < n) answer.push(arr1[p1++])
    while (p2 < m) answer.push(arr2[p2++])

    return answer;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(a, b)); // [1, 2, 3, 3, 5, 6, 7, 9]