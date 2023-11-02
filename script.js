console.log("hello");
console.log("gm")

var a=10;
var b=9;
console.log(a == b)

// var arr=[1,2,3,4,5,6,7,8,9];
//    var res=[];
//     for(var i = 0 ; i< arr.length ; i++){
//          res.push(arr[i]*2)
//              console.log(res)
//           } 
     
  

const fruits=['apple','mangoe','orange']
const result=fruits.map((str)=>str+'s')
console.log(result)

function palindrome(string) {
    const array=string.split('');
    const reverse_array=array.reverse();
    const reverse_string=reverse_array.join('');
    if(string==reverse_string)
    {
        console.log('palindrome');
    }
    else{
        console.log('no');
    }
}
const string=prompt("Enter a string")
palindrome(string);
