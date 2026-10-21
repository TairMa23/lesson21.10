const numbers = [1, 2, 3, 4, 5, 101, 7, 8, 9, 102, 11, 120, 13, 14, 15];
function arrOfNumberBig100(arr){
    const newArr=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>100) {
            newArr.push(arr[i])
        }
        
    }
    console.log(newArr);
    
}
arrOfNumberBig100(numbers)
