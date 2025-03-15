/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
     this.sheet = new Array(26).fill().map(()=>new Array(rows).fill(0));
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {

    let row = cell.slice(0,1);
    let col = cell.slice(1);
    
    let rowIndex = row.charCodeAt(0) - 'A'.charCodeAt(0);
    let colIndex = parseInt(col, 10) - 1;
    
    this.sheet[rowIndex][colIndex] = value;
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    let row = cell.slice(0,1);
    let col = cell.slice(1);
    
    let rowIndex = row.charCodeAt(0) - 'A'.charCodeAt(0);
    let colIndex = parseInt(col, 10) - 1;
    this.sheet[rowIndex][colIndex] = 0;
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    
    function isNumber(str){
        return !Number.isNaN(Number(str));
    }
   
    formula = formula.slice(1);
    let operand = formula.split('+');
    
    if(isNumber(operand[0]) && isNumber(operand[1])){
        
        return Number(operand[0]) + Number(operand[1]);
        
    }else if(!isNumber(operand[0]) && !isNumber(operand[1])){
        
        let rowOp0 = operand[0][0];
        let colOp0 = operand[0].slice(1);
        let rowOp1 = operand[1][0];
        let colOp1 = operand[1].slice(1);

        let row0Index = rowOp0.charCodeAt(0) - 'A'.charCodeAt(0);
        let row1Index = rowOp1.charCodeAt(0) - 'A'.charCodeAt(0);
        console.log(operand,row0Index,colOp0,row1Index,colOp1)
        
        return Number(this.sheet[row0Index][colOp0-1])+Number(this.sheet[row1Index][colOp1-1]);
        
    }else{
        
        let  t;
        
        if(isNumber(operand[0]) && !isNumber(operand[1])){
            
            let rowOp1 = operand[1][0];
            let colOp1 = operand[1].slice(1);
            
            let row1Index = rowOp1.charCodeAt(0) - 'A'.charCodeAt(0);
            
            t = Number(this.sheet[row1Index][colOp1-1]) + Number(operand[0]);
            
        }else if(!isNumber(operand[0]) && isNumber(operand[1])){
            
            let rowOp0 = operand[0][0];
            let colOp0 = operand[0].slice(1);
            
            let row0Index = rowOp0.charCodeAt(0) - 'A'.charCodeAt(0);
            
            t = Number(operand[1]) + Number(this.sheet[row0Index][colOp0-1]);
            
        }
        
        return t
    }
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
