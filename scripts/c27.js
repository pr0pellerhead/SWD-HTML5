
// +
// -
// *
// /
// %

// 2 + 2
// 3 * 6
// 3 / 3
// 9 % 4
// 5 - 3

// 15 % 4
// 20 % 7
// 7 % 2
// 139 % 65

var grad = "Paris";
var bukvi = grad.length;
var ostatok = bukvi % 2;

if(ostatok == 1){
	console.log('losh grad');
}else{
	console.log('dobar grad');
}

console.log(grad.length % 2 == 0 ? 'Dobar grad' : 'Losh grad');