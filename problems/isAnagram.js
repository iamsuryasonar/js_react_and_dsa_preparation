var isAnagram = function (s, t) {
    /* 
        let sArr = s.split('');
        let tArr = t.split('');
        let sortedS = sArr.sort();
        let sortedT = tArr.sort();
        if (sortedS.join('') === sortedT.join('')) {
            return true
        }
        return false;
    */

    /* another solution */

    let sArr = s.split('');
    let tArr = t.split('');

    let map = new Map();

    sArr.forEach((i) => {
        if (!map.has(i)) {
            map.set(i, 1);
        } else {
            map.set(i, map.get(i) + 1);
        }
    })


    for (let i in tArr) {
        if (map.has(tArr[i])) {
            if (map.get(tArr[i]) === 1) {
                map.delete(tArr[i]);
            } else {
                map.set(tArr[i], map.get(tArr[i]) - 1);
            }
        } else {
            return false;
        }
    }
    return map.size === 0;
};


console.log(isAnagram("a", "ab"))
