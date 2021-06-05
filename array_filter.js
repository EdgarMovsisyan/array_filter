let arr = [15, 36, 57, 105, 21, 2, 66];

let newArr = arr.filter((element) => {
    if(element < 40) {
        return element;
    }
});

console.log(newArr);


function filter(inputArr) {
    let newArr = [];
    for(let i = 0; i < inputArr.length; ++i) {
        if(inputArr[i] < 40) {
            newArr.push(inputArr[i]);
        }
    }
    return newArr;
};

console.log(filter(arr));