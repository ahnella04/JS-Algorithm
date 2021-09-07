// function solution(arr) {
//     let answer = [0, 0, 0, 0, 0];
//     for (let i = 0; i < arr.length; i++) {
//         let cnt = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (i === j) {
//                 continue;
//             }
//             if (arr[j] > arr[i]) {
//                 cnt++;
//             }
//          
//         }
//     }
//     return answer;
// }

function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1); // length: 5, [1, 1, 1, 1, 1]
    // console.log(answer)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[i]) answer[i]++;
        }
    }
    return answer;
}