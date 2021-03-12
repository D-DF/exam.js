const average = (array) => {
    let result = 0;

    for(let i = 0; i < array.length; i++){
        result += Number(array[i]);
    }
    return result / array.length;
}

console.log(average([2, 3, 4, 5]))
