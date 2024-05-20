
// var join = function (arr1, arr2) {
//     let result = [];

//     let map = new Map()
//     arr1.forEach((obj) => {
//         map.set(obj.id, obj)
//     })

//     arr2.forEach((obj) => {
//         if (map.has(obj.id)) {
//             let objInMap = map.get(obj.id)
//             for (key in obj) {
//                 objInMap[key] = obj[key]
//             }
//         } else {
//             map.set(obj.id, obj)
//         }
//     })

//     return [...map.values()].sort((a, b) => a.id - b.id)
// };


// Slight variation

var join = function(arr1, arr2) {
    let joinedArray = [];
    let index = 0;

    // to keep track of what id's are already pushed to new array;
    let map = new Map();

    for(let item of [...arr1,...arr2]){
        if(map.has(item.id)){
            let i = map.get(item.id);
            joinedArray[i] = {...joinedArray[i],...item}
        }else{
            map.set(item.id,index);
            index++;
            joinedArray.push(item);
        }
    }

    return joinedArray.sort((a, b)=>a.id-b.id);
};
