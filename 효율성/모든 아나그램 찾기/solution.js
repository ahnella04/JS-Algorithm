function compareMaps(map1, map2) {
    // console.log(map1.size); b a c 순서
    if (map1.size !== map2.size) return false;
    
}

function solution(s, t) {
    let answer = 0;
    let tH = new Map();
    let sH = new Map();

    for (let x of t) {
        if (tH.has(x)) tH.set(x, tH.get(x) + 1);
        else tH.set(x, 1);
    }
    // console.log(tH);
    let len = t.length - 1; // 2
    for (let i = 0; i < len; i++) {
        if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
        else sH.set(s[i], 1);
    }
    // console.log(sH);
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
        // 추가
        if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
        else sH.set(s[rt], 1);
        // 비교
        if (compareMaps(sH, tH)) answer++;
        // 빼고
        sH.set(s[lt], sH.get(s[lt]) - 1);
        if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
        lt++;
    }

    return answer;
}

let str1 = "bacaAacba";
let str2 = "abc";
console.log(solution(str1, str2));