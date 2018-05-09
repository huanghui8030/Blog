//通过传值给对象，加上数据类型，达到数组去重的功能
function arrRepeat(arr){
	var s = {} ;
	for(var i = 0; i < arr.length ; i++){
		var type = typeof arr[i] ;
		var obj = type + arr[i] ; 
		console.log(i,arr[i],type,obj,s[obj]);
		if(!s[obj]){
			s[obj] = 1;
		}else{
			arr.splice(i,1);
			i--;
		}
	}
	console.log(arr);
	return arr;
}
arrRepeat([1,2,3,5,2,4,'3','4']);

arrRepeat([198,54,324,43,45,67,43]);