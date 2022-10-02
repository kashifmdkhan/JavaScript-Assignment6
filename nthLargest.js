function nthLargest(arr,n){
    arr.sort((a,b)=>a-b);
    let count = 0;
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]!=arr[i+1]){
            count++;
        }
        if(count == n){
            return arr[i];
        }
    }
}

let arr = [3,45,6,7,23,5,7,7,8];
console.log(nthLargest(arr,5));