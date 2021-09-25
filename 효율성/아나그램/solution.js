function solution(str1, str2) {
    let answer = "YES";
    let sH = new Map();
    for (let x of str1) {
        if (sH.has(x)) sH.set(x, sH.get(x) + 1)
        else sH.set(x, 1)
    }
    // console.log(sH);
    for (let x of str2) {
        if (!sH.has(x) || sH.get(x) === 0) answer = "NO";
        sH.set(x, sH.get(x) - 1)
    }

    return answer;
}

let arr1 = "AbaAeCe";
let arr2 = "baeeACA";
console.log(solution(arr1, arr2))