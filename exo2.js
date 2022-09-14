const apprenants = [
    {
        "name": "Violet Campbell",
        "age": 61
    },
    {
        "name": "Curry Dunlap",
        "age": 58
    },
    {
        "name": "Loretta Wolf",
        "age": 87
    },
    {
        "name": "Elliott Rodriquez",
        "age": 71
    },
    {
        "name": "Daphne Park",
        "age": 32
    },
    {
        "name": "Estelle Rivas",
        "age": 48
    },
    {
        "name": "Annabelle Mckinney",
        "age": 69
    },
    {
        "name": "Owen Morse",
        "age": 35
    },
    {
        "name": "Byrd Hodge",
        "age": 46
    },
    {
        "name": "Kelley Sparks",
        "age": 74
    },
    {
        "name": "Morales Harrington",
        "age": 75
    },
    {
        "name": "Zamora Watts",
        "age": 68
    },
    {
        "name": "Viola Floyd",
        "age": 62
    },
    {
        "name": "Howell Tran",
        "age": 19
    },
    {
        "name": "Giles Knight",
        "age": 57
    },
    {
        "name": "Baldwin Nielsen",
        "age": 20
    },
    {
        "name": "Moore Cabrera",
        "age": 24
    },
    {
        "name": "Taylor Farley",
        "age": 80
    },
    {
        "name": "Parrish Shepherd",
        "age": 32
    },
    {
        "name": "Meghan Wilkins",
        "age": 65
    }
];


// Votre code ici :
// Afficher le nom de l'apprenant le plus jeune


let lePlusJeune = apprenants[0];
for(let i in apprenants) {
    if (lePlusJeune.age > apprenants[i].age) {
        lePlusJeune = apprenants[i];
    }
}

console.log("Le plus jeune apprenant est " + lePlusJeune.name);
console.log("Il a " + lePlusJeune.age + " ans");