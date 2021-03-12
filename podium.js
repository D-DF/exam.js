const podium = (array) => {
    for(let i = 0; i < array.length; i++) {
        console.log(array.sort((a, b) => b - a))
        
    }
}

podium([10, 20, 5])
