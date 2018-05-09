//通过indexof达到数组去重的功能
function arrRepeat(arr){
	var newArr = [];
	for(var i = 0; i < arr.length ; i++){
		var n = arr[i];
		if(newArr.indexOf(n)==-1){
			newArr.push(n);
		}
	}
	console.log(newArr);
	return newArr;
}
arrRepeat([1,2,3,5,2,'3',4]);

arrRepeat([198,54,324,43,45,67,43]);