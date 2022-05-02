
let bum = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function toSubArrays (arr){
    // sort the array numerically
    let sortArr = arr.sort((a,b) => a-b);
    // temp holding arrays
    let tmpArr = [];
    let result = [];
    
    for (let i = 0; i <= sortArr.length; i++) {
        if ((i === 0) || (sortArr[i] === sortArr[i - 1])){
        	// add first element or matching element to tmp array
            tmpArr.push(sortArr[i]);
            } else {
            // add tmp array to result array
            result.push(tmpArr);
            // clear the tmp array
            tmpArr = [];
            // add new value to tmp array
            tmpArr.push(sortArr[i]);
        }
    }
    return result;
}
console.log(toSubArrays(arr));
Objects.keys(thisi())

const x = "this is my "

const x1 = () => {
    for (i=0; i<=Array; i++) {
        
    }
}