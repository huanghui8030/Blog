/**
 * 通过ES6语法来去重
 * [...new Set(arr)]，其中arr为数组
 **/   
console.log([...new Set([1,2,3,2,1])]);