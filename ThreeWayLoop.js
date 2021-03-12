const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'];

for(let i = 0; i < tab.length; i++) {
    console.log(`${tab[i]}, length: ${tab[i].length}`)
}


for(const tableau of tab) {
    console.log(`${tableau}, length: ${tableau.length}`)
}

tab.forEach(element => console.log(`${element}, length: ${element.length}`))