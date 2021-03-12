const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'];

let i = 0;
while (i < tab.length) {
    i++;
    console.log(`${tab[i]}, length: ${tab[i].length}`);
} 

let j = 0;

do {
    j++;
    console.log(`${tab[j]}, length: ${tab[j].length}`)
} while ( j < tab.length)
