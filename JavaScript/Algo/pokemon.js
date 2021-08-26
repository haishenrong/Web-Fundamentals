var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

const reverseName = (str) => {
    var reversed = "";
    for(var i = 0; i<str.length;i++)
        reversed = str.charAt(i)+reversed ;
    return reversed;
}

console.log("id greater than 3");
pokémon.map(poke => poke.id%3===0 ? console.log(poke) : poke);
console.log("type length > 1");
pokémon.map(poke => poke.types.length>1 ? console.log(poke) : poke);
console.log("only type is poison");
pokémon.map(poke => poke.types.length==1&&poke.types[0]==="poison" ? console.log(poke.name) : poke);
console.log("first type of second type is flying");
pokémon.map(poke => poke.types.length==2&&poke.types[1]==="flying" ? console.log(poke.types[0]) : poke);
console.log("only type is poison reverse");
pokémon.map(poke => {poke.types.length==1&&poke.types[0]==="poison" ? console.log(reverseName(poke.name)) : poke; return poke;});