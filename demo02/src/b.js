/*String.prototype.trim = function(mode){
	if( mode === 'left' ){
		return (this.charAt(0));
	}else if( mode === 'right' ){

	}else{
		return this.trim('left').trim('right');
	}

}*/

var str = ' 123 123 ';
console.log('1:'+str);
//去前后空格
function Trim(str){ 
  	return str.replace(/(^\s*)|(\s*$)/g, ""); 
}
console.log('1:'+Trim(str));
console.log(' aa dd '.trim());