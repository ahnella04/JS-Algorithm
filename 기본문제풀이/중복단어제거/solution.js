function solution(s) {
    for (let i = 0; i < arr.length; i++) {
        let answer;
        answer = s.filter(function (v, i) {
            // console.log(v, i);
            if (s.indexOf(v) === i) return true;
        })

        return answer;
    }
}