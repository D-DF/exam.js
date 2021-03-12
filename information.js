const information = (prenom, nom, age) => {

    console.log(`prenom: ${prenom}`)
    console.log(`nom: ${nom}`)
    console.log(`age: ${age}`)

    if(age < 18) {
        let result =  18 - age;
        console.log(`Tu seras majeur dans ${result} ans`)
    } else {
        let resu = age - 18;
        console.log(`Tu es majeur depuis ${resu} ans`)
    }
}

information("David", "De Freitas", 29)