function stringChop(str, size) {
  // your code here
	let n=str.length;
	let arr=[];
	let i=0;
	while(i<n){
		let currStr;
		if(i+size<n){
			currStr=str.substr(i,size);
		}
		else{
			currStr=str.slice(i,n);
		}
		arr.push(currStr);
		i=i+size;
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));  
