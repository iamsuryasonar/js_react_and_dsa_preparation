
var join = function (arr1, arr2) {
    let result = [];

    let map = new Map()
    arr1.forEach((obj) => {
        map.set(obj.id, obj)
    })

    arr2.forEach((obj) => {
        if (map.has(obj.id)) {
            let objInMap = map.get(obj.id)
            for (key in obj) {
                objInMap[key] = obj[key]
            }
        } else {
            map.set(obj.id, obj)
        }
    })

    return [...map.values()].sort((a, b) => a.id - b.id)
};