const marvel_heroes = ["thor", "iron man", "spider man"];
const dc_heroes = ["batman", "superman", "flash"];

//marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// const heroes = marvel_heroes.concat(dc_heroes);

// console.log(heroes);

//spread operator in js use for merge two array
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
//console.log(all_new_heroes);

