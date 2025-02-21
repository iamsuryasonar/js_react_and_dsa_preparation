/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  // reorder items inline
  for(let i = 0;i<items.length;i++){
    let index = newOrder[newOrder[i]];

    // swap values
    let temp1 = items[newOrder[i]];
    items[newOrder[i]] = items[i];
    items[i] = temp1;

    // swap index
    newOrder[newOrder[i]] = newOrder[i];
    newOrder[i] = index;
  }
  return items;
}


const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]

console.log(sort(A,B))
