
var TimeMap = function() {
    this.store = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.store.has(key)){
        this.store.set(key,[[value,timestamp]]);
    }else{
        let val = this.store.get(key);
        val.push([value,timestamp]);
        this.store.set(key,val);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let aux = this.store.get(key);
    if(!aux) return '';

    for(let i = aux.length-1;i>=0;i--){
        if(aux[i][1]<=timestamp){
            return aux[i][0];
            break;
        }
    }
    return '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
